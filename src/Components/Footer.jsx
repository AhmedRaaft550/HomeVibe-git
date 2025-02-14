import Card from 'react-bootstrap/Card';
import footerImg from '../images/myfooter.jpg'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
<div className="footer">
<Card className="bg-dark text-white footer-card">
      <Card.Img src={footerImg} alt="" />
      <Card.ImgOverlay className='footer-text'>
        <Card.Title>
            <h1> - HomeVibe -</h1>
        </Card.Title>
        <p>"Your Style, Your Way – Customize Your Experience Today!"</p>
      </Card.ImgOverlay>
      <div className="icons">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faXTwitter} />
      </div>
    </Card>
    <p className='copy-right'>&copy; 2024 Created by Ahmed Raaft. All rights reserved.</p>
  
</div>
  );
}

export default Footer;