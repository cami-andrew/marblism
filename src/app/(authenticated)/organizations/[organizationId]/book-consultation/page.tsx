'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function ConsultationBookingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [selectedTime, setSelectedTime] = useState<dayjs.Dayjs | null>(null)

  const { data: pets } = Api.pet.findMany.useQuery({
    where: { petOwners: { some: { userId: user?.id } } },
  })

  const { mutateAsync: createConsultation } =
    Api.trainingPlan.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      if (!selectedDate || !selectedTime) {
        enqueueSnackbar('Please select both date and time', {
          variant: 'error',
        })
        return
      }

      const consultationDateTime = selectedDate
        .hour(selectedTime.hour())
        .minute(selectedTime.minute())

      await createConsultation({
        data: {
          name: `Consultation for ${values.petId}`,
          description: values.reason,
          startDate: consultationDateTime.toISOString(),
          status: 'Scheduled',
          userId: user?.id as string,
        },
      })

      enqueueSnackbar('Consultation booked successfully', {
        variant: 'success',
      })
      router.push(
        `/organizations/${params.organizationId}/consultation-history`,
      )
    } catch (error) {
      console.error('Error booking consultation:', error)
      enqueueSnackbar('Failed to book consultation', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Book a Consultation</Title>
        <Paragraph>
          Schedule a consultation with a pet psychologist or trainer to get
          professional help for your pet's behavioral issues.
        </Paragraph>

        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="petId"
            label="Select Pet"
            rules={[{ required: true, message: 'Please select a pet' }]}
          >
            <Select placeholder="Select your pet">
              {pets?.map(pet => (
                <Select.Option key={pet.id} value={pet.id}>
                  <FontAwesomeIcon icon={faDog} /> {pet.name} ({pet.species})
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Consultation Date"
            rules={[{ required: true, message: 'Please select a date' }]}
          >
            <DatePicker
              style={{ width: '100%' }}
              onChange={date => setSelectedDate(date)}
              // prefix={<CalendarOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="time"
            label="Consultation Time"
            rules={[{ required: true, message: 'Please select a time' }]}
          >
            <TimePicker
              style={{ width: '100%' }}
              format="HH:mm"
              onChange={time => setSelectedTime(time)}
              // prefix={<ClockCircleOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="reason"
            label="Reason for Consultation"
            rules={[
              {
                required: true,
                message: 'Please provide a reason for the consultation',
              },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Describe your pet's behavioral issues or concerns"
              // prefix={<CommentOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Book Consultation
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
