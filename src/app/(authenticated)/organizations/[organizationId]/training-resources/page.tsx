'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Select,
  Card,
  Button,
  Row,
  Col,
  Space,
  Tag,
} from 'antd'
import { BookOutlined, FilterOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Search } = Input
const { Option } = Select
interface TrainingResource {
  id: string
  name: string
  description: string
  startDate?: string
  endDate?: string
  status?: string
}
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TrainingResourcesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [resources, setResources] = useState<TrainingResource[]>([])
  const [filteredResources, setFilteredResources] = useState<
    TrainingResource[]
  >([])
  const [statusFilter, setStatusFilter] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { data: trainingPlansData, isLoading } =
    Api.trainingPlan.findMany.useQuery({})
  const { mutateAsync: updateTrainingPlan } =
    Api.trainingPlan.update.useMutation()

  useEffect(() => {
    if (trainingPlansData) {
      setResources(trainingPlansData)
      setFilteredResources(trainingPlansData)
    }
  }, [trainingPlansData])

  useEffect(() => {
    filterResources()
  }, [statusFilter, searchQuery])

  const filterResources = () => {
    let filtered = resources
    if (statusFilter) {
      filtered = filtered.filter(resource => resource.status === statusFilter)
    }
    if (searchQuery) {
      filtered = filtered.filter(
        resource =>
          resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()),
      )
    }
    setFilteredResources(filtered)
  }

  const handleSaveResource = async (resourceId: string) => {
    try {
      await updateTrainingPlan({
        where: { id: resourceId },
        data: { status: 'saved' },
      })
      enqueueSnackbar('Resource saved successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to save resource', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Training Resources</Title>
        <Paragraph>
          Access a library of training resources and articles to better care for
          and train your pet.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12} md={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Filter by Status"
                onChange={value => setStatusFilter(value)}
                allowClear
              >
                <Option value="active">Active</Option>
                <Option value="completed">Completed</Option>
                <Option value="saved">Saved</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={16}>
              <Search
                placeholder="Search resources"
                onSearch={value => setSearchQuery(value)}
                style={{ width: '100%' }}
              />
            </Col>
          </Row>

          {isLoading ? (
            <Paragraph>Loading resources...</Paragraph>
          ) : (
            <Row gutter={[16, 16]}>
              {filteredResources?.map(resource => (
                <Col xs={24} sm={12} md={8} key={resource.id}>
                  <Card
                    title={resource.name}
                    extra={
                      <Button
                        icon={<SaveOutlined />}
                        onClick={() => handleSaveResource(resource.id)}
                      >
                        Save
                      </Button>
                    }
                    actions={[
                      <Button
                        key="read"
                        icon={<BookOutlined />}
                        onClick={() =>
                          router.push(
                            `/organizations/${params.organizationId}/training-resources/${resource.id}`,
                          )
                        }
                      >
                        Read More
                      </Button>,
                    ]}
                  >
                    <Paragraph ellipsis={{ rows: 3 }}>
                      {resource.description}
                    </Paragraph>
                    <Space>
                      <Tag color="blue">{resource.status}</Tag>
                      {resource.startDate && (
                        <Tag color="green">
                          Start:{' '}
                          {dayjs(resource.startDate).format('YYYY-MM-DD')}
                        </Tag>
                      )}
                      {resource.endDate && (
                        <Tag color="orange">
                          End: {dayjs(resource.endDate).format('YYYY-MM-DD')}
                        </Tag>
                      )}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
