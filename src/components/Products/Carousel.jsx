import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <section>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/Banner/Banner4.png" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/Banner/Banner4.png" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/Banner/Banner4.png" alt="Primeiro slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Carousel