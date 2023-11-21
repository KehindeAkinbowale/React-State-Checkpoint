import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={props.Img} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Full Name: {props.data}</ListGroup.Item>
        <ListGroup.Item>Bio: {props.bio}</ListGroup.Item>
        <ListGroup.Item>Profession: {props.profession}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default KitchenSinkExample;