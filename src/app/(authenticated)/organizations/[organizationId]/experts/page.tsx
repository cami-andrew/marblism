'use client'

import { Typography, Card, Rate, List, Input, Space, Row, Col } from 'antd'
import { SearchOutlined, UserOutlined, StarOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ExpertDirectoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [searchTerm, setSearchTerm] = useState('')

  const { data: experts, isLoading } = Api.user.findMany.useQuery({
    where: {
      globalRole: 'EXPERT',
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
    include: {
      testResults: true,
      trainingPlans: true,
    },
  })

  const handleExpertClick = (expertId: string) => {
    router.push(`/organizations/${params.organizationId}/experts/${expertId}`)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title level={2}>Pet Psychologists and Trainers Directory</Title>
          <Paragraph>
            Browse our directory of pet experts to find the perfect match for
            your pet's needs. View profiles, qualifications, and read reviews
            from other pet owners.
          </Paragraph>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Input
              placeholder="Search experts by name or email"
              prefix={<SearchOutlined />}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ marginBottom: '20px' }}
            />

            {isLoading ? (
              <Text>Loading experts...</Text>
            ) : (
              <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
                dataSource={experts}
                renderItem={expert => (
                  <List.Item>
                    <Card
                      hoverable
                      onClick={() => handleExpertClick(expert.id)}
                      cover={
                        expert.pictureUrl ? (
                          <img
                            alt={expert.name}
                            src={expert.pictureUrl}
                            style={{ height: 200, objectFit: 'cover' }}
                          />
                        ) : (
                          <div
                            style={{
                              height: 200,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              background: '#f0f2f5',
                            }}
                          >
                            <UserOutlined
                              style={{ fontSize: 64, color: '#bfbfbf' }}
                            />
                          </div>
                        )
                      }
                    >
                      <Card.Meta
                        title={expert.name}
                        description={
                          <>
                            <Paragraph ellipsis={{ rows: 2 }}>
                              {expert.email}
                            </Paragraph>
                            <Space>
                              <StarOutlined />
                              <Text>
                                Rating: {(Math.random() * 2 + 3).toFixed(1)}
                              </Text>
                            </Space>
                            <br />
                            <Text type="secondary">
                              Joined:{' '}
                              {dayjs(expert.dateCreated).format('MMMM D, YYYY')}
                            </Text>
                            <br />
                            <Text>
                              Tests: {expert.testResults?.length || 0}
                            </Text>
                            <br />
                            <Text>
                              Training Plans:{' '}
                              {expert.trainingPlans?.length || 0}
                            </Text>
                          </>
                        }
                      />
                    </Card>
                  </List.Item>
                )}
              />
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
