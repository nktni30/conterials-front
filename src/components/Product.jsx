import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (curElm) => {
      const {id, productName, category, brand, image, size }= curElm;
      return (
            <NavLink className="text-decoration-none" to={`/SingleProduct/${id}`}>
                  <div className='col mb-4'>
                        <div class="pro-card">
                              <div className='img-box'>
                                    <img alt='hh' className='img-fluid' src={image} class="card-img-top" />
                              </div>

                              <div class="card-body">
                                    <h6 class="con-card-title">{productName}</h6>
                                    <div class="con-card-details d-flex justify-content-between">
                                          <div><span>Brand: </span>{brand} </div>
                                          <div><span>Size:</span> {size}</div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </NavLink>
      )
}

export default Product;