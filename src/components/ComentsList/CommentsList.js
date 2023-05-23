import Accordion from 'react-bootstrap/Accordion';
import Comment from './Comment';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsFetch } from '../../store/actions';
import SpinnerCircle from '../SpinnerCircle';

function CommentsList({comments}) {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.myReducer.isLoadingComments)

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={()=> dispatch(getCommentsFetch())}>
        Comments
        </Accordion.Header>
        <Accordion.Body>
            {
            (isLoading) 
            ? <SpinnerCircle marginTop={10}/> 
            : <ListGroup>
                {comments.map((comment,id) => (<ListGroup.Item  key={id}><Comment key={id} email={comment.email} body={comment.body}/></ListGroup.Item>))}
            </ListGroup>
            }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CommentsList;
