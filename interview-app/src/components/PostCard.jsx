import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PostCard.css'

function PostCard({ post }) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  function handleLike(e) {
    e.stopPropagation() // don't navigate when clicking the heart
    setLiked(l => !l)
  }

  return (
    <div className="post-card" onClick={() => navigate(`/post/${post.id}`)}>
      <div className="post-card__header">
        <div className="avatar" />
        <div>
          <p className="post-card__title">Post</p>
          <p className="post-card__email">a@b.c</p>
        </div>
      </div>
      <p className="post-card__body">{post.body}</p>
      <button
        className={`heart-btn ${liked ? 'heart-btn--liked' : ''}`}
        onClick={handleLike}
        aria-label="Like"
      >
        <span class="material-symbols-outlined">favorite</span>
      </button>
    </div>
  )
}

export default PostCard
