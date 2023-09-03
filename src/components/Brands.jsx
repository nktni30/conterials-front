import React from 'react';
import {  Grid, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { BrandsList } from '../data/brands';
import { BrandsListCard } from './Cards';

const brands = () => {
  return (
      <>
      <div className="container-fluid mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-2">
                            <h5 className="text-center">Shop by Brands</h5>
                        </div>
                    </div>
                    <div className="row">
                    <Swiper
                        // install Swiper modules
                        modules={[Grid]}
                        spaceBetween={20}
                        slidesPerView={4}
            
                        >
                        
                            {BrandsList && BrandsList.map((item) =>
                                <SwiperSlide>
                                    <BrandsListCard
                                        img={item.Brand_Image}
                                    />

                                </SwiperSlide>
                            )}
                        
                        
                    </Swiper>
                    </div>
                </div>
            </div>
        </>
  )
}

export default brands;