'use client'

import { useState } from 'react'
import {
  Typography,
  Card,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  List,
  Spin,
  Avatar,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyPetsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingPet, setEditingPet] = useState<Prisma.PetGetPayload<{
    include: { petOwners: true }
  }> | null>(null)
  const [form] = Form.useForm()

  const {
    data: pets,
    isLoading,
    refetch,
  } = Api.pet.findMany.useQuery({
    where: { petOwners: { some: { userId: user?.id } } },
    include: { petOwners: true },
  })

  const { mutateAsync: createPet } = Api.pet.create.useMutation()
  const { mutateAsync: updatePet } = Api.pet.update.useMutation()
  const { mutateAsync: deletePet } = Api.pet.delete.useMutation()
  const { mutateAsync: createPetOwner } = Api.petOwner.create.useMutation()

  const handleAddOrEditPet = async (values: any) => {
    try {
      if (editingPet) {
        await updatePet({
          where: { id: editingPet.id },
          data: {
            name: values.name,
            species: values.species,
            breed: values.breed,
            dateOfBirth: values.dateOfBirth?.toISOString(),
          },
        })
        enqueueSnackbar('Pet updated successfully', { variant: 'success' })
      } else {
        const newPet = await createPet({
          data: {
            name: values.name,
            species: values.species,
            breed: values.breed,
            dateOfBirth: values.dateOfBirth?.toISOString(),
          },
        })
        await createPetOwner({
          data: {
            userId: user!.id,
            petId: newPet.id,
          },
        })
        enqueueSnackbar('Pet added successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving pet', { variant: 'error' })
    }
  }

  const handleDeletePet = async (petId: string) => {
    try {
      await deletePet({ where: { id: petId } })
      enqueueSnackbar('Pet deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting pet', { variant: 'error' })
    }
  }

  const showModal = (
    pet?: Prisma.PetGetPayload<{ include: { petOwners: true } }>,
  ) => {
    if (pet) {
      setEditingPet(pet)
      form.setFieldsValue({
        ...pet,
        dateOfBirth: pet.dateOfBirth ? dayjs(pet.dateOfBirth) : undefined,
      })
    } else {
      setEditingPet(null)
      form.resetFields()
    }
    setIsModalVisible(true)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>My Pets</Title>
        <Paragraph>
          Manage your pets' profiles, view their psychological assessments, and
          track their training progress.
        </Paragraph>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          style={{ marginBottom: 16 }}
        >
          Add New Pet
        </Button>

        {isLoading ? (
          <Spin size="large" />
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
            dataSource={pets}
            renderItem={pet => (
              <List.Item>
                <Card
                  actions={[
                    <EditOutlined key="edit" onClick={() => showModal(pet)} />,
                    <DeleteOutlined
                      key="delete"
                      onClick={() => handleDeletePet(pet.id)}
                    />,
                  ]}
                >
                  <Card.Meta
                    avatar={
                      <Avatar
                        src={
                          pet.imageUrl || 'https://joeschmoe.io/api/v1/random'
                        }
                      />
                    }
                    title={pet.name}
                    description={
                      <>
                        <Text>Species: {pet.species}</Text>
                        <br />
                        <Text>Breed: {pet.breed || 'N/A'}</Text>
                        <br />
                        <Text>
                          Age:{' '}
                          {pet.dateOfBirth
                            ? dayjs().diff(dayjs(pet.dateOfBirth), 'year') +
                              ' years'
                            : 'N/A'}
                        </Text>
                      </>
                    }
                  />
                  <Button
                    type="link"
                    onClick={() =>
                      router.push(
                        `/organizations/${params.organizationId}/pet-test?petId=${pet.id}`,
                      )
                    }
                  >
                    View Psychological Tests
                  </Button>
                </Card>
              </List.Item>
            )}
          />
        )}

        <Modal
          title={editingPet ? 'Edit Pet' : 'Add New Pet'}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleAddOrEditPet} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: 'Please input the pet name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="species"
              label="Species"
              rules={[
                { required: true, message: 'Please input the pet species!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="breed" label="Breed">
              <Input />
            </Form.Item>
            <Form.Item name="dateOfBirth" label="Date of Birth">
              <DatePicker />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  {editingPet ? 'Update' : 'Add'}
                </Button>
                <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
