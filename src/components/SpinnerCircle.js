import Spinner from 'react-bootstrap/Spinner';

function SpinnerCircle({marginTop}) {
  return (
    <Spinner style={{marginTop}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerCircle;