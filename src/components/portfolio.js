import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banner from '../assets/img/banner-bg.png';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export const Portfolio = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

  return (
    <Container className='main-ports' id="portfolios">
        <h2 className='text-center mt-5 text-white'>My Portfolio</h2>
        <Row className='justify-content-center'>
            <Col className='col-lg-4 col-md-6 col-10'>
                <Card className='port-card border-0 shadow mt-5' data-aos="zoom-in">
                    <Card.Img className='images px-2 py-2' variant="top" src={banner} />
                    <Card.Body className='card-body'>
                        <Card.Title className='card-title text-black'>Project Title</Card.Title>
                        <Card.Text className='card-text text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='pb-2 btn-reads'>Read more <i class="bi bi-chevron-right"></i></Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-10'>
                <Card className='port-card border-0 shadow mt-5' data-aos="zoom-in">
                    <Card.Img className='images px-2 py-2' variant="top" src={banner} />
                    <Card.Body>
                        <Card.Title className='card-title text-black'>Project Title</Card.Title>
                        <Card.Text className='card-text text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='pb-2 btn-reads'>Read more <i class="bi bi-chevron-right"></i></Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-10'>
                <Card className='port-card border-0 shadow mt-5' data-aos="zoom-in">
                    <Card.Img className='images px-2 py-2' variant="top" src={banner} />
                    <Card.Body>
                        <Card.Title className='card-title text-black'>Project Title</Card.Title>
                        <Card.Text className='card-text text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='pb-2 btn-reads'>Read more <i class="bi bi-chevron-right"></i></Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

