import Post from './Post'

const PostList = ({ posts, loading }) => {
  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostList
