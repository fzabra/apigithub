import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { InterfacePublicRepo } from '../../Services/InterfacePublicRepoData'
import { getRepos } from '../../Services/Api'

const SearchBar = () => {

    // Hook useState - State for entered search input
    const [searchInput, setSearchInput] = useState('');

    // Event Typing - Update the state with the entered search input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    // State to store search results, initialized with an empty array 
    const [searchResults, setSearchResults] = useState<InterfacePublicRepo[]>([]);

     // Event Typing - Handle form submission to fetch repositories based on the search input
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const repos = await getRepos(searchInput);
            if ('message' in repos) {
                throw new Error(repos.message);
            }
            setSearchResults(repos);
        } catch (error) {
            console.error('Erro ao buscar repositórios:', error);
            setSearchResults([]);
        }
    };

  return (
    <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Search by Public Repositories"
            aria-label="Search by Public Repositories"
            value={searchInput}
            onChange={handleInputChange}
            data-bs-theme="dark"
            />
            <Button type="submit" variant="outline-secondary">
            Search
            </Button>
        </InputGroup>
        {searchResults.length > 0 && (
            <ListGroup variant="flush" data-bs-theme="dark" className='list-group-'>
                {searchResults.map(repo => (
                    <ListGroup.Item key={repo.id}>
                        <Link to={`/DetailPage/${repo.full_name}`}>{repo.name}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )}
    </Form>
  )
}

export default SearchBar;
