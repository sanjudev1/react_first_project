


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Customcard(props) {
  return (
    <Card 
     bg={'warning'.toLowerCase()}
          key={"warning"}
          text={"warning".toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ height:"30rem"}}
          className="mb-2 w-23 h-23"
          >
      <Card.Img variant="top" src={props.product.image} style={{ width: '16rem' }} />
      <Card.Body>
        <Card.Title>{props.product.title.slice(0,50)}</Card.Title>
        <Card.Text>
          {props.product.description.slice(0,50)}
        </Card.Text>
        <Link to={`/product/${props.product.id}`}><Button variant="success">{props.product.category}</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Customcard;