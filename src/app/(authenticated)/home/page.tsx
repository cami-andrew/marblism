'use client'

import { Typography, Card, Space } from 'antd'
import {
  InfoCircleOutlined,
  RocketOutlined,
  TeamOutlined,
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

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to PetPal
        </Title>
        <Paragraph
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '30px',
          }}
        >
          Your one-stop solution for pet care and training
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card
            title={
              <>
                <InfoCircleOutlined /> How It Works
              </>
            }
            style={{ width: '100%' }}
          >
            <Paragraph>
              PetPal is designed to help pet owners understand their pets better
              and provide the best care possible. Here's how you can use our
              application:
            </Paragraph>
            <ul>
              <li>Take psychological tests for your pets</li>
              <li>Book consultations with pet experts</li>
              <li>Access training resources</li>
              <li>Manage your pets' profiles</li>
              <li>View consultation history</li>
              <li>Get AI-powered pet advice</li>
              <li>Engage with our community forum</li>
              <li>Find expert pet professionals</li>
            </ul>
          </Card>

          <Card
            title={
              <>
                <RocketOutlined /> Getting Started
              </>
            }
            style={{ width: '100%' }}
          >
            <Paragraph>To begin your journey with PetPal:</Paragraph>
            <ol>
              <li>Create a profile for your pet(s) in the "My Pets" section</li>
              <li>
                Take a psychological test to understand your pet's behavior
              </li>
              <li>
                Explore our training resources for helpful tips and techniques
              </li>
              <li>
                Book a consultation with an expert if you need personalized
                advice
              </li>
            </ol>
          </Card>

          <Card
            title={
              <>
                <TeamOutlined /> Community and Support
              </>
            }
            style={{ width: '100%' }}
          >
            <Paragraph>
              PetPal is more than just an app - it's a community of pet lovers.
              Don't hesitate to:
            </Paragraph>
            <ul>
              <li>
                Participate in our community forum to share experiences and ask
                questions
              </li>
              <li>Reach out to our support team if you need assistance</li>
              <li>
                Provide feedback to help us improve your PetPal experience
              </li>
            </ul>
          </Card>
        </Space>

        <Paragraph style={{ textAlign: 'center', marginTop: '30px' }}>
          Ready to start? Navigate through the menu to explore all our features!
        </Paragraph>
      </div>
    </PageLayout>
  )
}
