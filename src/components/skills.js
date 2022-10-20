
import { Container, Row, Col } from "react-bootstrap";
import skills from '../assets/img/skills.png';
import { useEffect } from "react";

export const Skills = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return (
        <div className='kills pt-5' id="skills">
            <Container>
                <h2 className="text-center">Skills <i class="bi bi-reception-3"></i></h2>
                <Row className="row mt-2 justify-content-lg-start justify-content-md-start justify-content-center">
                    <Col className="col col-lg-7 col-md-6 col-10 py-5 main">
                        <div className="bar front expert" data-skill="HTML5"></div>
                        <div className="bar front advanced" data-skill="CSS3"></div>  
                        <div className="bar back intermediate" data-skill="Javascript"></div> 
                        <div className="bar back basic" data-skill="PHP"></div>       
                        <div className="bar learning" data-skill="Java"></div>    
                    </Col>
                    <div className="col col-lg-5 col-md-6 col-10">
                        <img src={skills} className="img-fluid" alt=""  data-aos="zoom-in" />
                    </div>
                </Row>
            </Container>
        </div>
    );

}

