import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { InterfacePublicRepo } from '../../Services/InterfacePublicRepoData';

interface CardItemProps {
  repoDetails: InterfacePublicRepo;
}

function CardItem({ repoDetails }: CardItemProps) {
  return (
    <Card style={{ width: '18rem' }} 
    data-bs-theme="dark">
      <Card.Img variant="top" src={repoDetails.owner.avatar_url} />
      <Card.Body>
        <Card.Title>{repoDetails.name}</Card.Title>
        <Card.Text>{repoDetails.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Stars: {repoDetails.stargazers_count}</ListGroup.Item>
        <ListGroup.Item>Forks: {repoDetails.forks_count}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;