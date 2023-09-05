import React from "react";
import { Navigation, Scrollbar, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ConCategoriesCard } from "./Cards";
import { Categories } from "../data/categories";
import 'swiper/css';
import 'swiper/css/free-mode';

const categories = () => {
    return (
        <>
            <div className="container-fluid bg-white py-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <h5 className="text-center text-lg-start">Shop by Categories</h5>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, A11y, Grid]}
                            breakpoints={{
                                400:{
                                    slidesPerView: 3,
                                    spaceBetween:30,
                                },
                                768:{
                                    slidesPerView:5,
                                    spaceBetween:30,
                                },
                                1024:{
                                    slidesPerView:9,
                                    spaceBetween:30,
                                }
                            }
                            }
                            freeMode={true}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}>
                                
                            {Categories && Categories.map((item) =>
                                <SwiperSlide>
                                    <ConCategoriesCard
                                        img={item.Cat_Image}
                                        title={item.Title}
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

export default categories;