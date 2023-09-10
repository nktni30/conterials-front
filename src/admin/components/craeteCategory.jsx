import React from 'react'

const craeteCategory = () => {
      return (
            <div className='container'>
                  <div className='my-5'>
                        <h2>Create Category</h2>
                        <from>
                              <div className='row'>
                                    <div className='col-6'>
                                          <label>Category Title</label>
                                          <br />
                                          <input type='text' name='categoryTitle' />
                                          <br />
                                          <br />
                                          <label>Cateogory Photo</label>
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

export default craeteCategory;