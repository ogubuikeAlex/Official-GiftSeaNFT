// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import Card from '../Components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../img/unsplashed3.png';
import image2 from '../img/unsplashed5.png';
import image3 from '../img/unsplashcolor.png';
import image4 from '../img/unsplashed4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const TabPagination= () => {
  return (
    <Swiper style={{padding: '3rem', objectFit:'cover', width: '100%'}}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={3}
      spaceBetween={60}
    //   navigation
      loop={true}
      autoplay={{delay: 2500, disableOnInteraction: false}}
      pagination={{ clickable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       <SwiperSlide style={{background: '#FFF', boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.2)', borderRadius:'20px', padding: '.5rem'}}>
       <img src={image}
       style={{borderRadius: '20px', objectFit:'cover'}} alt="First slide"/>
       <Card/>
       </SwiperSlide>
       <SwiperSlide style={{background: '#FFF', boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.2)', borderRadius:'20px', padding: '.5rem'}}>
       <img src={image2} style={{borderRadius: '20px', objectFit:'cover'}}
        alt="Second slide"/>
       <Card/>
       </SwiperSlide>
       <SwiperSlide style={{background: '#FFF', boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.2)', borderRadius:'20px', padding: '.5rem'}}>
       <img src={image3} style={{borderRadius: '20px', objectFit:'cover'}}
        alt="Third slide"/>
       <Card/>
       </SwiperSlide>
       <SwiperSlide style={{background: '#FFF', boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.2)', borderRadius:'20px', padding: '.5rem'}}>
       <img src={image4} style={{borderRadius: '20px', objectFit:'cover'}}
        alt="Fourth slide"/>
       <Card/>
       </SwiperSlide>
    </Swiper>
  );
};

export default TabPagination;