import React, { useState } from 'react';
import ProductFilter from '../components/ProductFilter';
import { BsFunnelFill } from 'react-icons/bs';

const Products = () => {

      const [show, setShow] = useState(false);


      return (
            <>
                  {show && <ProductFilter />}
                  <div className='container'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='row my-5'>
                              <div className='col-6 col-lg-6 d-flex justify-content-start align-items-center'>
                                    <label className='label'>Sort  </label>
                                    <select className='sort-products' type='select'>
                                          <option value="volvo">Relevance</option>
                                          <option value="saab">New Products</option>
                                          <option value="opel">Old Products</option>
                                    </select>
                              </div>
                              <div className='col-6 col-lg-6 d-flex justify-content-end align-items-center'>
                                    <label className='label'>Filter  </label>
                                    <span className=''>
                                          <BsFunnelFill onClick={() => setShow(!show)} />
                                    </span>
                              </div>
                        </div>

                        <div className='row'>
                              <div className='col-lg-3 col-12 col-md-4'>
                                    <div className='card p-3 pb-0 rounded-0 border-0'>
                                          <div className='row'>
                                                <div className='col-5 col-lg-12 d-flex justify-content-center align-items-center'>
                                                      <div className='prod-img'>
                                                            <img className='img-fluid' src="" alt='prod' />
                                                      </div>
                                                </div>
                                                <div className='col-7 col-lg-12 justify-content-start'>
                                                      <div className='product-name mb-3'>Coral Modular Range | Brand |
                                                            Name | Size</div>
                                                      <div className='offer-tag my-2 py-2 px-3'>ON OFFER</div>
                                                      <div className='product-details my-3'>A fine variety of well-designed switches with a combination of superior technology, complete durability, modular look, and safety</div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Products;