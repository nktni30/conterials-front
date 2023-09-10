import React from 'react';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { BrandsList } from '../data/brands';
import { BrandsListCard } from './Cards';

const brands = () => {
    return (
        <>

            <div className="container my-lg-5">
                <div className="row">
                    <div className="col-sm-12 ">
                        <h5 className="text-center text-lg-start">Shop by Brands</h5>
                    </div>
                </div>
                <div className="row">
                    <Swiper
                        // install Swiper modules
                        modules={[Grid, Pagination]}

                        breakpoints={{
                            400: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 10,
                                spaceBetween: 20,
                                pagination: true,
                            }
                        }}

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

        </>
    )
}

export default brands;