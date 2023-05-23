import Post from './Post';

function PostsList ({ posts }) {
  return (
    <div className='posts_container'>
        {posts.map((post, id) => (<Post userId={post.userId} id={post.id} key={id} title={post.title} body={post.body}/>))}
    </div>
  );
}

export default PostsList;