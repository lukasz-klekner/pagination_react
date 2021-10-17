import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import PostList from './components/PostList'
import Pagination from './components/Pagination'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(async () => {
    setLoading(true)
    const response = await axios.get(BASE_URL)
    setPosts(response.data)
    setLoading(false)
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My blog</h1>
      <PostList posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
