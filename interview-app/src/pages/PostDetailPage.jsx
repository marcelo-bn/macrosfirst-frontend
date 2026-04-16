import { useParams, useNavigate } from 'react-router-dom'
import { posts, comments } from '../data'
import CommentCard from '../components/CommentCard'
import { useState } from 'react'
import './PostDetailPage.css'

function PostDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  const post = posts.find(p => p.id === Number(id))
  const postComments = comments.filter(c => c.postId === Number(id))

  if (!post) {
    return (
      <div className="detail-page">
        <p>Post not found.</p>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <header className="detail-page__header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ‹ Posts
        </button>
        <span className="detail-page__title">Post</span>
        <button className="icon-btn" aria-label="Add">+</button>
      </header>

      <div className="detail-page__content">
        {/* Post card */}
        <div className="detail-post">
          <div className="detail-post__header">
            <div className="avatar" />
            <div>
              <p className="detail-post__name">Post</p>
              <p className="detail-post__email">a@b.c</p>
            </div>
          </div>
          <p className="detail-post__body">{post.body}</p>
          <button
            className={`heart-btn ${liked ? 'heart-btn--liked' : ''}`}
            onClick={() => setLiked(l => !l)}
            aria-label="Like"
          >
            <span class="material-symbols-outlined">favorite</span>
          </button>
        </div>

        {/* Comments */}
        {postComments.length > 0 ? (
          <div className="detail-page__comments">
            {postComments.map(comment => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <p className="no-comments">No comments for this post.</p>
        )}
      </div>
    </div>
  )
}

export default PostDetailPage
