import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='m-0 w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8Gvd44hRutopSOpFirlfIPJBPVnJedZdrA&s" height={25} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="m-0 w-100 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8Gvd44hRutopSOpFirlfIPJBPVnJedZdrA&s" height={25} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='m-0 w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8Gvd44hRutopSOpFirlfIPJBPVnJedZdrA&s"  height={25} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;


