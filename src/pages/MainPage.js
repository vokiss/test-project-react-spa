import Header from '../components/Header'
import { useSelector } from 'react-redux'
import SpinnerCircle from '../components/SpinnerCircle'
import PostsList from '../components/PostList/PostList'

function MainPage () {
  const posts = useSelector(state => state.myReducer.posts)
  const isLoading = useSelector(state => state.myReducer.isLoading)

  return (
    <div className='main-page_container'>
    <Header/>
    {
    (isLoading)
      ? <SpinnerCircle marginTop={100}/>
      : <PostsList posts={posts}/>
    }
    </div>
  )
}

export default MainPage;
