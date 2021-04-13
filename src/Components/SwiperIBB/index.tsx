import React from 'react';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y]);

interface SwiperProps {
  slides: JSX.Element[];
  perview: number;
  spaceBetween?: number;
}

/*
 *
 */
const SwiperIBB: React.FC<SwiperProps> = ({ slides, perview, spaceBetween = 0 }: SwiperProps) => {
  //
  return (
    <>
      <Swiper
        /*pagination={true}*/
        scrollbar={true}
        slidesPerView={perview}
        resistance={false}
        resistanceRatio={0}
        spaceBetween={spaceBetween}
      >
        {slides.map((item: JSX.Element, key: number) => (
          <SwiperSlide
            key={key}
            // dangerouslySetInnerHTML={{
            //   __html: item,
            // }}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperIBB;
