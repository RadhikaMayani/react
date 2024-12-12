import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <Container>
        Login to read posts
      </Container>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        {posts.map((post) => {
          <div className='p-2 w-1/4' key={post.$id}>
            <PostCard {...post} />
          </div>
        })}
      </Container>
    </div>
  )
}

export default Home