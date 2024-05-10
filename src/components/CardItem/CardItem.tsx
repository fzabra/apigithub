import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { InterfacePublicRepo } from '../../Services/InterfacePublicRepoData';
import { Link } from 'react-router-dom';

interface CardItemProps {
  repoDetails: InterfacePublicRepo;
}

function CardItem({ repoDetails }: CardItemProps) {
  return (
    <Card style={{ width: '18rem' }} data-bs-theme="dark">
      <Card.Img variant="top" src={repoDetails.owner.avatar_url} />
      <Card.Body>
        <Card.Title>User: {repoDetails.owner.login}</Card.Title>
        <Card.Text>Repo: <Link to={repoDetails.html_url}>{repoDetails.name}</Link></Card.Text>
        <Card.Text>Description: {repoDetails.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Language: {repoDetails.language ? repoDetails.language : 'N/A'}</ListGroup.Item>
      <ListGroup.Item>Stars: {repoDetails.stargazers_count ? repoDetails.stargazers_count : 'N/A'}</ListGroup.Item>
      <ListGroup.Item>Forks: {repoDetails.forks_count ? repoDetails.forks_count : 'N/A'}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={repoDetails.owner.html_url} target="_blank">GitHub</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;