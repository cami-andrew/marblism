'use client'

import { useState, useRef } from 'react'
import {
  Typography,
  Input,
  Button,
  Upload,
  List,
  Card,
  Space,
  Spin,
} from 'antd'
import {
  SendOutlined,
  UploadOutlined,
  SaveOutlined,
  HistoryOutlined,
} from '@ant-design/icons'
const { Title, Paragraph, Text } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AIPetAdvisorPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: generateText } = Api.rag.generateText.useMutation()
  const { mutateAsync: createRagVector } = Api.ragVector.create.useMutation()

  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  )
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')

    try {
      const response = await generateText({
        prompt: input,
        history: newMessages.map(m => m.content),
        tags: uploadedFiles,
      })
      setMessages([
        ...newMessages,
        { role: 'assistant', content: response.answer },
      ])
    } catch (error) {
      enqueueSnackbar('Failed to get response from AI', { variant: 'error' })
    } finally {
      setIsLoading(false)
      scrollToBottom()
    }
  }

  const handleFileUpload = async (file: File) => {
    try {
      const { url } = await uploadFile({ file })
      const { key } = await loadFile({ url })
      setUploadedFiles([...uploadedFiles, key])
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  const saveConversation = async () => {
    try {
      await createRagVector({
        data: {
          key: `conversation_${dayjs().format('YYYY-MM-DD_HH:mm:ss')}`,
          tags: JSON.stringify(messages),
        },
      })
      enqueueSnackbar('Conversation saved successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to save conversation', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>AI Pet Advisor</Title>
        <Paragraph>
          Get quick answers to common pet behavior questions from our AI-powered
          advisor. You can also upload documents or images related to your pet's
          behavior for more accurate advice.
        </Paragraph>

        <Card style={{ marginBottom: '20px' }}>
          <List
            dataSource={messages}
            renderItem={(message, index) => (
              <List.Item>
                <Card
                  style={{
                    width: '100%',
                    backgroundColor:
                      message.role === 'user' ? '#f0f2f5' : '#e6f7ff',
                  }}
                >
                  <Text strong>
                    {message.role === 'user' ? 'You' : 'AI Advisor'}:
                  </Text>
                  <Paragraph>{message.content}</Paragraph>
                </Card>
              </List.Item>
            )}
          />
          <div ref={messagesEndRef} />
        </Card>

        <Space direction="vertical" style={{ width: '100%' }}>
          <TextArea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question here..."
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
          <Space>
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSendMessage}
              loading={isLoading}
            >
              Send
            </Button>
            <Upload
              beforeUpload={file => {
                handleFileUpload(file)
                return false
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Document/Image</Button>
            </Upload>
            <Button icon={<SaveOutlined />} onClick={saveConversation}>
              Save Conversation
            </Button>
            <Button
              icon={<HistoryOutlined />}
              onClick={() =>
                router.push(
                  `/organizations/${params.organizationId}/consultation-history`,
                )
              }
            >
              View History
            </Button>
          </Space>
        </Space>

        {isLoading && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Spin size="large" />
            <Paragraph>AI is thinking...</Paragraph>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
