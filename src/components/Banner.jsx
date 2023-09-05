import React from 'react';
import ToolsImg from '../img/banner/tools.png';


const Banner = () => {
      return (
            <>
            <div className='container-fluid'>
                  <div className="banner row">
                        <div className='col-sm-6 d-flex justify-content-center justify-content-lg-center align-items-lg-center align-items-end'>
                              <h4 className='banner-text'>
                                    Get flat<span> 10% OFF</span> on Tools
                              </h4>
                        </div>
                        <div className='col-sm-6 d-flex justify-content-center align-items-center'>
                              <img className='' src={ToolsImg} alt='banner1'/>
                        </div>
                  </div>
                  </div>
            </>
      )
}

export default Banner;