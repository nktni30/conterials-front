import React from 'react'

const createBrand = () => {
      return (
            <div className='container'>
                  <div className='my-5'>
                        <h2>Create Brand</h2>
                        <from>
                              <div className='row'>
                                    <div className='col-6'>
                                          <label>Brand Name</label>
                                          <br />
                                          <input type='text' name='brandName' />
                                          <br />
                                          <br />
                                          <label>Brand Image</label>
                                          <br />
                                          <input type='file' />
                                          <br />
                                          <br />
                                          <button className='btn btn-success'>Submit</button>
                                    </div>
                              </div>
                        </from>
                  </div>
            </div>
      )
}

export default createBrand;