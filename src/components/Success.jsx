import Alert from 'react-bootstrap/Alert';

function Success({ message}) {
  return (
        <Alert key='success' variant='success'>
          {message}
        </Alert>
  );
}

export default Success;