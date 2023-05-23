import Card from 'react-bootstrap/Card'
import { CloseButton } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPostsFetch, getUsersFetch } from '../store/actions'
import SpinnerCircle from '../components/SpinnerCircle'
import Avatar from '../components/Avatar'
import PostsList from '../components/PostList/PostList'

function UserPage () {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getPostsFetch())
      dispatch(getUsersFetch())
    }
  }, [id, dispatch])

  const isLoading = useSelector(state => state.myReducer.isLoading)
  const users = useSelector(state => state.myReducer.users)
  const filterUserById = users.filter(e => e.id === Number(id))[0]

  const posts = useSelector(state => state.myReducer.posts)
  const filteredPostsByUser = posts.filter(e => e.userId === Number(id))

  return (
    <div className='user-page_container'>
    <Card style={{ textAlign: 'left' }}>
      <Card.Body>
        <Avatar height={150} src={require("../images/avatar.jpg")}></Avatar>
        <Link to={'/'}>
        <CloseButton style={{ float: 'right' }}/>
        </Link>
      {
      (filterUserById)
        ? <Card.Title> {filterUserById.username} | {filterUserById.email} | {filterUserById.website}</Card.Title>
        : ''}
      </Card.Body>
      {
    (isLoading)
      ? <SpinnerCircle marginTop={100}/>
      : <PostsList posts={filteredPostsByUser}/>
    }
    </Card>
    </div>
  )
}

export default UserPage;

