import React from 'react';

const ProductFilter = () => {
      return (
            <div className='product-filter'>
                  <div className='filter-body'>
                        <div className='row'>
                              <h6 className=''>Categories</h6>
                              <div className='row-cols-auto'>
                                    <div className='filter-categories cat'>
                                          <label>
                                                <input type='checkbox' value="1"/><span>Plumbing</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Tiling</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Electrical</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Paints</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Plywood</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Tools</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Sanitry</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'>
                                    <label>
                                                <input type='checkbox' value="1"/><span>Home Improvement</span>
                                          </label>
                                    </div>
                                    <div className='filter-categories cat'><label>
                                                <input type='checkbox' value="1"/><span>Hardware</span>
                                    </label></div>
                              </div>

                        </div>
                        <hr />
                        <div className='row'>
                              <h6 className=''>Brands</h6>
                              <div className='row-cols-auto'>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Asian Paints</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Essco</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Havels</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Jaguar</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>JSW</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Kajaria</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Pidilite</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Roff</span>
                                          </label>
                              </div>
                              <div className='filter-categories cat'><label>
                                                <input type='checkbox' value="1"/><span>Somany</span>
                                          </label></div>
                              <div className='filter-categories cat'><label>
                                                <input type='checkbox' value="1"/><span>Supreme</span>
                                          </label></div>
                              <div className='filter-categories cat'><label>
                                                <input type='checkbox' value="1"/><span>Taparia</span>
                                          </label></div>
                              <div className='filter-categories cat'>
                              <label>
                                                <input type='checkbox' value="1"/><span>Wavin</span>
                                          </label>
                              </div>
                              </div>
                        </div>
                        <hr />
                        <div className='row'>
                              <h6 className=''>Color</h6>
                              <div className='color-select-'></div>
                        </div>
                        <hr/>
                        <div className='row d-flex justify-content-evenly'>
                              <div className='col'>
                                    <button type='buttin' className='btn btn-outline-primary'>Clear</button>
                              </div>
                              <div className='col d-flex justify-content-end'>
                                    <button className='btn btn-primary'>Apply</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default ProductFilter;