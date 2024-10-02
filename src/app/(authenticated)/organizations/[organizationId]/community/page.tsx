'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { CommentOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, List, Space, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography

export default function CommunityForumPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [newPost, setNewPost] = useState('')
  const [replyContent, setReplyContent] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const { data: posts, refetch: refetchPosts } =
    Api.ragVector.findMany.useQuery({
      where: { tags: { has: 'forum_post' } },
      orderBy: { dateCreated: 'desc' },
    })

  const { mutateAsync: createPost } = Api.ragVector.create.useMutation()
  const { mutateAsync: createReply } = Api.ragVector.create.useMutation()

  const handleCreatePost = async () => {
    if (!newPost.trim()) {
      enqueueSnackbar('Post content cannot be empty', { variant: 'error' })
      return
    }
    try {
      await createPost({
        data: {
          key: `post_${Date.now()}`,
          tags: ['forum_post'],
          content: JSON.stringify({
            userId: user?.id,
            userName: user?.name,
            text: newPost,
            replies: [],
          }),
        },
      })
      setNewPost('')
      refetchPosts()
      enqueueSnackbar('Post created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to create post', { variant: 'error' })
    }
  }

  const handleCreateReply = async (postId: string) => {
    if (!replyContent.trim()) {
      enqueueSnackbar('Reply content cannot be empty', { variant: 'error' })
      return
    }
    try {
      const post = posts?.find(p => p.id === postId)
      if (!post) throw new Error('Post not found')

      const postContent = JSON.parse(post.content as string)
      const updatedReplies = [
        ...postContent.replies,
        { userId: user?.id, userName: user?.name, text: replyContent },
      ]

      await createReply({
        data: {
          key: post.key,
          tags: post.tags,
          content: { ...postContent, replies: updatedReplies },
        },
      })
      setReplyContent('')
      setReplyingTo(null)
      refetchPosts()
      enqueueSnackbar('Reply added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add reply', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Community Forum</Title>
        <Paragraph>
          Share experiences, ask questions, and connect with other pet owners in
          our community forum.
        </Paragraph>

        <Form layout="vertical" onFinish={handleCreatePost}>
          <Form.Item label="Create a new post">
            <Input.TextArea
              rows={4}
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Create Post
            </Button>
          </Form.Item>
        </Form>

        <List
          dataSource={posts}
          renderItem={post => {
            const postContent = JSON.parse(post.content as string)
            return (
              <List.Item>
                <Card style={{ width: '100%' }}>
                  <Text strong>{postContent.userName}</Text>
                  <Paragraph>{postContent.text}</Paragraph>
                  <List
                    dataSource={postContent.replies}
                    renderItem={(reply: any) => (
                      <List.Item>
                        <Text strong>{reply.userName}: </Text>
                        <Text>{reply.text}</Text>
                      </List.Item>
                    )}
                  />
                  {replyingTo === post.id ? (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Input.TextArea
                        rows={2}
                        value={replyContent}
                        onChange={e => setReplyContent(e.target.value)}
                        placeholder="Write your reply..."
                      />
                      <Button onClick={() => handleCreateReply(post.id)}>
                        Submit Reply
                      </Button>
                      <Button onClick={() => setReplyingTo(null)}>
                        Cancel
                      </Button>
                    </Space>
                  ) : (
                    <Button
                      icon={<CommentOutlined />}
                      onClick={() => setReplyingTo(post.id)}
                    >
                      Reply
                    </Button>
                  )}
                </Card>
              </List.Item>
            )
          }}
        />
      </div>
    </PageLayout>
  )
}
