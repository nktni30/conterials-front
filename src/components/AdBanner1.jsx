import React from 'react';
import add1 from '../img/add1.svg';

const AdBanner1 = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='ad-banner'>
          <div className='row row-cols-lg-2 row-cols-sm-2'>
            <div className='col-sm-6 col-sm-6'>
              <img alt='ban' className='img-fluid' src={add1} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdBanner1;