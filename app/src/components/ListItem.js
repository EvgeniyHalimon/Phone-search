import React, {useState, useEffect} from 'react';
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import shortid from 'shortid';
import axios from 'axios';

function ListItem(){
    const [isShow, setIsShow] = useState(false)
    const [phoneSpecif, setPhoneSpecif] = useState(null)
    let { slug } = useParams()

    const printSpec = async() => {
        if(!phoneSpecif){
            const result = await axios.get(`https://api-mobilespecs.azharimm.site/v2/${slug}`)
            setPhoneSpecif(result.data.data)
        }
        setIsShow(!isShow)
    }

    useEffect(() => {
        printSpec(slug)
    }, []) 

    return (
        <Container>
            <ListGroup.Item key={shortid.generate()} id={slug}>
                { isShow && 
                    <ListGroup>
                        <strong>{phoneSpecif.brand} {phoneSpecif.phone_name}</strong>
                        <img className='phone_img' src={phoneSpecif.thumbnail} alt="phone" />
                        {phoneSpecif.specifications.map((specif) => (
                            <ListGroup.Item key={shortid.generate()}>
                                <em>{specif.title}</em> 
                                {specif.specs.map(item => (
                                    <p key={shortid.generate()}>{item.key} : {item.val}</p> 
                                ))}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </ListGroup.Item>
        </Container>
    )
}

export default ListItem