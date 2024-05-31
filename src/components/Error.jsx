import Alert from 'react-bootstrap/Alert';

function Error({ message}) {
  return (
        <Alert key='danger' variant='danger'>
          {message}
        </Alert>
  );
}

export default Error;