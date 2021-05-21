import React from 'react';

import {
  Card, Button, CardImg, CardText, CardDeck,
  CardBody
} from 'reactstrap';


import pro1 from './EloFiloRestaurant.png'
import pro2 from './imageGallery.png'
import pro3 from './StuRegForm.png'

const Projects = () => {

    return (
        <CardDeck style={{color: 'black', marginTop:50, marginLeft:50, marginRight:50, borderRadius:15}} >
        <Card>
            <CardImg top width="100%" src={pro1} alt="Card image cap" />
            <CardBody>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button color="primary" href="https://github.com/Berzaf/EloFiloRestaurant">Source</Button>

            </CardBody>
            
        </Card>
        <Card >
            <CardImg top width="100%" src={pro2} alt="Card image cap" />
            <CardBody>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="primary" href="https://github.com/Berzaf/imageGallery">Source</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src={pro3} alt="Card image cap" />
            <CardBody>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button color="primary"  href="https://github.com/Berzaf/FullStackStudentRegFormApp">Source</Button>
            </CardBody>
        </Card>
        </CardDeck>
  );
};

export default Projects;