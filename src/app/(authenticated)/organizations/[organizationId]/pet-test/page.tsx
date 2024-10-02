'use client'

import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  Card,
  Space,
  Result,
} from 'antd'
import { PsychologicalTest, Pet, TestResult } from '@prisma/client'
import { QuestionCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PetPsychologicalTestPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [currentStep, setCurrentStep] = useState<
    'info' | 'questions' | 'results'
  >('info')
  const [petInfo, setPetInfo] = useState<{
    name: string
    species: string
    breed?: string
  }>()
  const [testResult, setTestResult] = useState<TestResult>()

  const { data: psychologicalTest } = Api.psychologicalTest.findFirst.useQuery(
    {},
  )
  const { mutateAsync: createPet } = Api.pet.create.useMutation()
  const { mutateAsync: createTestResult } = Api.testResult.create.useMutation()

  const handlePetInfoSubmit = async (values: typeof petInfo) => {
    try {
      await createPet({
        data: {
          ...values,
          petOwners: {
            create: {
              userId: user?.id as string,
            },
          },
        },
      })
      setPetInfo(values)
      setCurrentStep('questions')
    } catch (error) {
      enqueueSnackbar('Failed to save pet information', { variant: 'error' })
    }
  }

  const handleTestSubmit = async (values: { [key: string]: number }) => {
    if (!psychologicalTest || !user) return

    const score = Object.values(values).reduce((sum, value) => sum + value, 0)
    try {
      const result = await createTestResult({
        data: {
          score,
          completedAt: new Date().toISOString(),
          userId: user.id,
          testId: psychologicalTest.id,
        },
      })
      setTestResult(result)
      setCurrentStep('results')
    } catch (error) {
      enqueueSnackbar('Failed to submit test results', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Pet Psychological Test</Title>
        <Paragraph>
          Understand your pet's behavior and needs better by taking this
          psychological test.
        </Paragraph>

        {currentStep === 'info' && (
          <Card title="Pet Information">
            <Form layout="vertical" onFinish={handlePetInfoSubmit}>
              <Form.Item
                name="name"
                label="Pet Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="species"
                label="Species"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option value="dog">Dog</Select.Option>
                  <Select.Option value="cat">Cat</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="breed" label="Breed">
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Start Test
              </Button>
            </Form>
          </Card>
        )}

        {currentStep === 'questions' && psychologicalTest && (
          <Card title="Psychological Test Questions">
            <Form layout="vertical" onFinish={handleTestSubmit}>
              {[1, 2, 3, 4, 5].map(questionNumber => (
                <Form.Item
                  key={questionNumber}
                  name={`question${questionNumber}`}
                  label={`Question ${questionNumber}`}
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Select.Option value={1}>Rarely</Select.Option>
                    <Select.Option value={2}>Sometimes</Select.Option>
                    <Select.Option value={3}>Often</Select.Option>
                    <Select.Option value={4}>Always</Select.Option>
                  </Select>
                </Form.Item>
              ))}
              <Button type="primary" htmlType="submit">
                Submit Test
              </Button>
            </Form>
          </Card>
        )}

        {currentStep === 'results' && testResult && (
          <Result
            icon={<CheckCircleOutlined />}
            title="Test Completed"
            subTitle={`Your pet's psychological test score: ${testResult.score?.toString()}`}
            extra={[
              <Button
                key="dashboard"
                onClick={() =>
                  router.push(`/organizations/${params.organizationId}/home`)
                }
              >
                Back to Dashboard
              </Button>,
            ]}
          />
        )}
      </Space>
    </PageLayout>
  )
}
