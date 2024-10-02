'use client'

import { Typography, Row, Col, Card, Button } from 'antd'
import {
  HeartOutlined,
  BookOutlined,
  ExperimentOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const handleBookConsultation = () => {
    router.push(`/organizations/${params.organizationId}/book-consultation`)
  }

  const handleTakePetTest = () => {
    router.push(`/organizations/${params.organizationId}/pet-test`)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title
            level={1}
            style={{ textAlign: 'center', marginBottom: '24px' }}
          >
            Welcome to Cami's Pet Psychological Services
          </Title>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: '18px',
              marginBottom: '48px',
            }}
          >
            Discover expert psychological care for your beloved pets
          </Paragraph>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <HeartOutlined
                    style={{
                      fontSize: '48px',
                      color: '#1890ff',
                      marginTop: '24px',
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Compassionate Care"
                  description="We provide loving and understanding support for your pets' emotional well-being."
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <BookOutlined
                    style={{
                      fontSize: '48px',
                      color: '#52c41a',
                      marginTop: '24px',
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Expert Consultations"
                  description="Our experienced professionals offer tailored advice for your pet's specific needs."
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                cover={
                  <ExperimentOutlined
                    style={{
                      fontSize: '48px',
                      color: '#faad14',
                      marginTop: '24px',
                    }}
                  />
                }
              >
                <Card.Meta
                  title="Psychological Tests"
                  description="Gain insights into your pet's behavior with our comprehensive psychological assessments."
                />
              </Card>
            </Col>
          </Row>

          <Title
            level={2}
            style={{ textAlign: 'center', margin: '48px 0 24px' }}
          >
            What Our Clients Say
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card>
                <Paragraph>
                  "Cami's services transformed our anxious rescue dog into a
                  confident and happy pet. Highly recommended!"
                </Paragraph>
                <Paragraph strong>- Sarah M., Dog Owner</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Paragraph>
                  "The pet psychological test helped us understand our cat's
                  needs better. Now our home is more harmonious than ever."
                </Paragraph>
                <Paragraph strong>- Michael L., Cat Owner</Paragraph>
              </Card>
            </Col>
          </Row>

          <Row justify="center" style={{ marginTop: '48px' }}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Button
                type="primary"
                size="large"
                block
                onClick={handleBookConsultation}
              >
                Book a Consultation
              </Button>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{
                marginTop: { xs: '16px', sm: '0' },
                marginLeft: { sm: '16px' },
              }}
            >
              <Button size="large" block onClick={handleTakePetTest}>
                Take Pet Psychological Test
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
