import Card from 'react-bootstrap/Card';
import footerImg from '../images/myfooter.jpg'
import './footer.css'

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
    </Card>
</div>
  );
}

export default Footer;