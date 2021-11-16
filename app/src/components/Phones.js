import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ListGroup, Button,InputGroup, FormControl, Container, Navbar} from 'react-bootstrap'
import shortid from 'shortid';
import { Link } from 'react-router-dom';


function Phones(){
    const [phones, setPhones] = useState([])
    const [search, setSearch] = useState('Acer')
    const [url, setUrl] = useState(`http://api-mobilespecs.azharimm.site/v2/search?query=Acer`)
    

    const fetchData = async() => {
    if(!search) {
        return
    }
    const result = await axios(url)
    const data = result.data.data
    setPhones(data.phones)
    }

    useEffect(() => {
        fetchData()
    }, [url]);

    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Brand"
                    aria-label="Brand"
                    aria-describedby="basic-addon2"
                />
                <Button variant="info" 
                    onClick={
                        () => setUrl(`http://api-mobilespecs.azharimm.site/v2/search?query=${search}`,
                        () => setSearch(search)
                    )}
                >
                    Search
                </Button>
            </InputGroup>
                <Navbar>
                    <ListGroup>
                        {phones.map(phone => 
                            <Link key={shortid.generate()} to={`/${phone.slug}`}>
                                {phone.brand} {phone.phone_name}
                            </Link>
                        )}
                    </ListGroup>
                </Navbar>
        </Container>
    );
}

export default Phones