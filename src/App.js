import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import PostList from './components/PostList'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(async () => {
    setLoading(true)
    const response = await axios.get(BASE_URL)
    setPosts(response.data)
    setLoading(false)
  }, [])

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My blog</h1>
      <PostList posts={posts} loading={loading} />
    </div>
  )
}

export default App
