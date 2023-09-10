import React from 'react';
// import ConatctForm from '../components/ConatctForm';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import BannerImg from '../img/about/banner-img.png';




const Contact = () => {

  return (

    <>
      <div className='container-fluid bg-blue-grad mb-5'>
        <div className='row row-col-2 about-banner '>
          <div className='col-3 d-flex align-items-center ps-5'>
            <h1 className='text-white'>Contact <br /> Us</h1>
          </div>
          <div className='col-9 d-flex mt-5'>
            <img className='about-banner-img' alt='' src={BannerImg} />
          </div>
        </div>
      </div>

      <div className='container'>

        <div className='row mt-5 mb-5'>

          {/* map */}

          <div className='col-sm-12 col-lg-12'>
            <iframe title='map' className='add-map mt-5 mb-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.177752045163!2d73.82902945000001!3d18.492968149999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe41da12903%3A0x19b1509c33c67f6a!2sKatakirr%20Misal!5e0!3m2!1sen!2sin!4v1688797502924!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* contact */}

          <div className='col-sm-12 col-lg-4 mb-4 px-5'>
            <div className='card rounded-0 border-0 pt-5 pb-5'>
              <div className='row'>
                <div className='col-4 col-md-4 col-lg-4 d-flex justify-content-end'>
                  <span className='contact-icon'>
                    <BsGeoAltFill />
                  </span>
                </div>
                <div className='col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center'>
                  <div className='contact-font text-lg-start'>Demo address , Ranchi, Jahrkhand -834001</div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-4 mb-4 px-5'>
            <div className='card rounded-0 border-0 pt-5 pb-5'>
              <div className='row'>
                <div className='col-4 col-md-4 col-lg-4 d-flex justify-content-end'>
                  <span className='contact-icon'>
                    <BsTelephoneFill />
                  </span>
                </div>
                <div className='col-8 col-md-8 col-lg-8 d-flex justify-content-start align-items-center'>
                  <div className='contact-font'>
                    <div>
                      <a href="tel:+4733378901">+91 8457915348</a>
                    </div>
                    <div>
                      <a href="tel:+4733378901">+91 8457915348</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-4 px-5'>
            <div className='card rounded-0 border-0 pt-5 pb-5'>
              <div className='row'>
                <div className='col-4 col-md-4 col-lg-4 d-flex justify-content-end align-items-center'>
                  <span className='contact-icon'>
                    <BsEnvelopeFill />
                  </span>
                </div>
                <div className='col-8 col-md-8 col-lg-8 d-flex justify-content-start  align-items-center'>
                  <div className='contact-font'>
                    <a href="mailto:info@conterials.com">info@conterails.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Form */}
        <div className='row mb-5'>
          <div className='col-12 col-sm-12'>
            <div className='card rounded-0 border-0 p-3'>
              <div className='h5 text-center my-3'>Leave your Message here</div>
              <div className="card-body">
                {/* <ConatctForm/> */}

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default Contact;