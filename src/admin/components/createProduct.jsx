import React from 'react'

const createProduct = () => {
      return (
            <div className='container'>
                  <div className='my-5'>
                        <h2>Create Product</h2>
                        <from>
                              <div className='row'>
                                    <div className='col-6'>
                                          <div className=" my-3">
                                                <label>Select Category</label>
                                                <br></br>
                                                <select>
                                                      <option>Cat 1</option>
                                                      <option>Cat 2</option>
                                                </select>
                                          </div>
                                          <div className=" my-3">
                                                <label>Select Sub Category</label>
                                                <br></br>
                                                <select>
                                                      <option>Sub Cat 1</option>
                                                      <option> Sub Cat 2</option>
                                                </select>
                                          </div>
                                          <div className=" my-3">
                                                <label>Select Brand</label>
                                                <br></br>
                                                <select>
                                                      <option>Brand 1</option>
                                                      <option>Brand 2</option>
                                                </select>
                                          </div>
                                          <div className=" my-3">
                                                <label>Product Name</label>
                                                <br></br>
                                                <input type='text'></input>
                                          </div>
                                          <div className=" my-3">
                                                <label>Size</label>
                                                <br></br>
                                                <input type='text' name='size'></input>
                                          </div>
                                          <div className=" my-3">
                                                <label>Description</label>
                                                <br></br>
                                                <textarea type='textbox' name='description'></textarea>
                                          </div>
                                          <div className=" my-3">
                                                <label>On offer</label>
                                                <br></br>
                                                <select>
                                                      <option>True</option>
                                                      <option>False</option>
                                                </select>
                                          </div>
                                          <button className='btn btn-success'>Submit</button>

                                    </div>
                              </div>
                        </from>
                  </div>
            </div>
      )
}

export default createProduct;