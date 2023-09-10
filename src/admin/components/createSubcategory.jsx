import React from 'react'

const createSubcategory = () => {
      return (
            <div className='container'>
                  <div className='my-5'>
                        <h2>Create Sub Category</h2>
                        <from>
                              <div className='row'>
                                    <div className='col-6'>
                                          <label>Select Category</label>
                                          <br />
                                          <select type='select' name='brandName' >
                                                <option>Cat1</option>
                                                <option>Cat2</option>
                                                <option>Cat3</option>

                                          </select>
                                          <br />
                                          <br />
                                          <label>Sub Category Title</label>
                                          <br />
                                          <input type='text' name='subCategory' />
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

export default createSubcategory;