
import gbr from '../assets/img/man-avatar.png';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';

export const MainHead = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

  return (
    <div className='main-head'>
        <Row className='row justify-content-center'>
            <Col className='col-lg-4 col-md-5 col-10 text-lg-start text-md-start text-center'>
                <img src={gbr} className="img-fluid rounded-circle w-75" ></img>
            </Col>
            <Col className='col-lg-4 col-md-5 col-10 text-lg-start text-md-start text-center'>
                <h3 className='text-white mt-lg-0 mt-md-0 mt-4'>Front End | UI/UX </h3>
                <p className='text-white mt-lg-3 mt-md-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non quae voluptate inventore, libero voluptatem nam ex id, beatae rerum in ab, temporibus officiis laboriosam exercitationem perferendis hic nesciunt quas?</p>
                <a href="#portfolios" className='btn btn-ports py-2 px-3  mt-lg-3 mt-md-0 mt-3'>My portfolio <i class="bi bi-chevron-right"></i></a>
            </Col>
        </Row>
    </div>
  );
}

