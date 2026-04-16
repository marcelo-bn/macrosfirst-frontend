import './CommentCard.css'

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <div className="avatar avatar--sm" />
        <div>
          <p className="comment-card__title">Comment</p>
          <p className="comment-card__email">{comment.email}</p>
        </div>
      </div>
      <p className="comment-card__body">{comment.body}</p>
    </div>
  )
}

export default CommentCard
