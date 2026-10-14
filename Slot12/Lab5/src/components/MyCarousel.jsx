import { Carousel } from 'react-bootstrap'
import banners from '../data/banners'

function MyCarousel() {
  return (
    <Carousel
      interval={2000}      
      fade               
      controls             
      indicators           
    >
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.image}
            alt={banner.title}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default MyCarousel