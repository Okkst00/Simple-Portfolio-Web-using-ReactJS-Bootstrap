import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export const Contact = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='contacts' id='contacts'>
        <Container className='mt-5 main-cont'>
            <h2 className='text-center text-white'>Contact Me</h2>
            <Row className='justify-content-center'>
                <Col className='contact col-lg-6 col-md-9 col-11 shadow px-5 py-5 mt-5' data-aos="fade-up">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a message here" />
                        </Form.Group>
                        <Button type="submit" className='btn btn-cont w-100 py-3 mt-3'>
                            Submit <i class="bi bi-send-fill"></i>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

