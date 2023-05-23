function Comment({email, body}) {
    return (
      <div className='comment_container'>
      <div>user: {email}</div>
      <div>{body}</div>
      </div>
    );
  }
  
  export default Comment;