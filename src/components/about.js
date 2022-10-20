import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import gbr from '../assets/img/man-avatar.png';

export const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (

        <div className="main-about py-5"id="abouts">
            <Container className="mt-5">
                <h2 className="text-center text-white mb-5">About Me</h2>
                <Row className="justify-content-center py-5 px-4" data-aos="zoom-in">
                    <Col className="col-lg-6 col-md-5 col-10 firstCol">
                        <img src={gbr} className="img-fluid rounded-circle w-75" ></img>
                    </Col>
                    <Col className="col-lg-6 col-md-6 col-10 SecCol">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore minus, veniam corrupti ut facilis eligendi, ipsa assumenda neque magnam est, temporibus numquam asperiores voluptatem explicabo ipsum officia quibusdam iusto ab vitae voluptatum laborum quisquam architecto modi nihil. Maiores, aperiam doloribus?</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )

}