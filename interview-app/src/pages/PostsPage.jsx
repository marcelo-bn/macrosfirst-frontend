import { posts } from '../data'
import PostCard from '../components/PostCard'
import './PostsPage.css'

function PostsPage() {
  return (
    <div className="posts-page">
      <header className="posts-page__header">
        <h1>Posts</h1>
        <button className="icon-btn" aria-label="Add">+</button>
      </header>

      <div className="posts-page__list">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostsPage
