import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InterfacePublicRepo } from '../../Services/InterfacePublicRepoData';
import { getRepoDetails } from '../../Services/Api'; 
import CardItem from '../../components/CardItem/CardItem';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DetailPage = () => {
  const { owner, repoName } = useParams<{ owner: string, repoName: string }>(); 
  const [repoDetails, setRepoDetails] = useState<InterfacePublicRepo | null>(null); 

  useEffect(() => {
    const fetchRepoDetails = async () => {
      if (owner && repoName) { 
        try {
          const repo = await getRepoDetails(owner, repoName);
          setRepoDetails(repo);
        } catch (error) {
          console.error('Error fetching repository details:', error);
          setRepoDetails(null);
        }
      }
    };
  
    fetchRepoDetails();
  }, [owner, repoName]);
  
  return (
    <div data-testid="detail-component">
      {repoDetails ? (
        <div>
          <CardItem repoDetails={repoDetails} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">
        <Button className="mt-3" data-bs-theme="dark" >Back</Button>
      </Link>
    </div>
  );
};

export default DetailPage;
