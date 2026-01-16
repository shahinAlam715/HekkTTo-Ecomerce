import React from 'react'
import mainbanner from "../assets/mainbanner.png"
import Slider from 'react-slick';


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear"
  }

  return (
   
    <section className="w-full overflow-hidden">

      <Slider {...settings}>
        <div className="w-full">
          <img
            src={mainbanner}
            alt="banner"
            className="w-full 2xs:object-contain md:h-[450px] lg:h-[650px] lg:object-cover"
          />
        </div>

        <div className="w-full">
          <img
            src={mainbanner}
            alt="banner"
            className="w-full 2xs:object-contain md:h-[450px] lg:h-[650px] lg:object-cover"
          />
        </div>
      </Slider>

    </section>
  )
}

export default Banner



