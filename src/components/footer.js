import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

export const Footer = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

  return (
    <Container fluid className="footers">
        <Row className='justify-content-center'>
            <Col className='col-lg- col-md-5 col-12 text-lg-start text-md-start text-center'>
                <p className="text-white my-5" data-aos='fade-right' data-aos-delay='300'><i class="bi bi-c-circle"></i> Okkst00 2022</p>
            </Col>
            <Col className='col-lg-5 col-md-5 col-12 text-lg-end text-md-end text-center text-end'>
                <p>
                    <a href='#' className="text-white me-4"><i class="bi bi-instagram"></i></a>
                    <a href='#' className="text-white me-4"><i class="bi bi-twitter"></i></a>
                    <a href='#' className="text-white me-lg-0 me-md-0 me-3"><i class="bi bi-github"></i></a>
                </p>
            </Col>
        </Row>
    </Container>
  );
}

