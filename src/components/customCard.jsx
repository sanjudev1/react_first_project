


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Customcard(props) {
  return (
    <Card 
     bg={'warning'.toLowerCase()}
          key={"warning"}
          text={"warning".toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ height:"30rem"}}
          className="mb-2 w-23"
          >
      <Card.Img variant="top" src={props.prop.image} style={{ width: '16rem' }} />
      <Card.Body>
        <Card.Title>{props.prop.title.slice(0,50)}</Card.Title>
        <Card.Text>
          {props.prop.description.slice(0,50)}
        </Card.Text>
        <Button variant="success">{props.prop.category}</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;