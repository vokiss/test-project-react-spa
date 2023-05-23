import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '../Avatar'
import { Link, generatePath } from 'react-router-dom'
import { getPostsFetch } from '../../store/actions'
import CommentsList from '../ComentsList/CommentsList'

function Post ({ userId, body, title, id }) {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.myReducer.comments)
  const filterCommentsById = comments.filter(e => e.postId === id)
  const onClickHandler = () => {
    window.scrollTo(0, 0)
    dispatch(getPostsFetch())
  }
  const linkRoute = generatePath('/user/:userId', { userId })

  return (
    <Card>
      <Card.Body>
      <Link to={linkRoute} onClick={onClickHandler}>
            <Avatar height={50} src={require("../../images/avatar.jpg")} />
        </Link>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {body}
        </Card.Text>
        <CommentsList comments={filterCommentsById}/>
      </Card.Body>
    </Card>
  )
}

export default Post;
