'use client'

import { Typography, List, Rate, Modal, Form, Input, Button, Space } from 'antd'
import {
  ClockCircleOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ConsultationHistoryPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false)
  const [selectedConsultation, setSelectedConsultation] = useState<any>(null)

  const {
    data: consultations,
    isLoading,
    refetch,
  } = Api.consultation.findMany.useQuery({
    where: { userId: user?.id },
    include: { expert: true },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: updateConsultation } =
    Api.consultation.update.useMutation()
  const { mutateAsync: createConsultation } =
    Api.consultation.create.useMutation()

  const handleRateAndFeedback = (consultation: any) => {
    setSelectedConsultation(consultation)
    setFeedbackModalVisible(true)
  }

  const handleFeedbackSubmit = async (values: {
    rating: number
    feedback: string
  }) => {
    try {
      await updateConsultation({
        where: { id: selectedConsultation.id },
        data: { rating: values.rating, feedback: values.feedback },
      })
      enqueueSnackbar('Feedback submitted successfully', { variant: 'success' })
      setFeedbackModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to submit feedback', { variant: 'error' })
    }
  }

  const handleRequestFollowUp = async (consultation: any) => {
    try {
      await createConsultation({
        data: {
          userId: user?.id,
          expertId: consultation.expert.id,
          status: 'pending',
          notes: `Follow-up to consultation on ${dayjs(consultation.dateCreated).format('MMMM D, YYYY')}`,
        },
      })
      enqueueSnackbar('Follow-up consultation requested successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to request follow-up consultation', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Consultation History</Title>
        <Paragraph>
          Review your past consultations, provide feedback, and request
          follow-ups.
        </Paragraph>

        {isLoading ? (
          <Text>Loading consultations...</Text>
        ) : (
          <List
            itemLayout="vertical"
            dataSource={consultations}
            renderItem={(consultation: any) => (
              <List.Item
                key={consultation.id}
                actions={[
                  <Space key="actions">
                    <Button
                      icon={<StarOutlined />}
                      onClick={() => handleRateAndFeedback(consultation)}
                    >
                      Rate & Feedback
                    </Button>
                    <Button
                      icon={<MessageOutlined />}
                      onClick={() => handleRequestFollowUp(consultation)}
                    >
                      Request Follow-up
                    </Button>
                  </Space>,
                ]}
              >
                <List.Item.Meta
                  title={`Consultation with ${consultation.expert.name}`}
                  description={
                    <Space direction="vertical">
                      <Text>
                        <ClockCircleOutlined />{' '}
                        {dayjs(consultation.dateCreated).format('MMMM D, YYYY')}
                      </Text>
                      {consultation.rating && (
                        <Rate disabled defaultValue={consultation.rating} />
                      )}
                    </Space>
                  }
                />
                <Paragraph>{consultation.notes}</Paragraph>
                {consultation.feedback && (
                  <Paragraph>
                    <strong>Your feedback:</strong> {consultation.feedback}
                  </Paragraph>
                )}
              </List.Item>
            )}
          />
        )}

        <Modal
          title="Rate and Provide Feedback"
          visible={feedbackModalVisible}
          onCancel={() => setFeedbackModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleFeedbackSubmit}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              name="feedback"
              label="Feedback"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Feedback
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
