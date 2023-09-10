import React from 'react';
import ProdSlider from '../components/ProdSlider';


const SingleProduct = () => {
  // const [singleProduct, setSingleProduct]= useState([]);

  // const { id } = useParams();

  // useEffect(() => {
  //   const getSingleProduct = product.map((curElm))
  // }, []);

  // if (isSingleLoading) {
  //   return <div>........Loading</div>;
  // }

  return (
    <div className='container mt-5'>
      {/* //map the image here */}
      <ProdSlider prodimgs=''/>

      <div className='row mb-2'>
        <div className='col-6'>
          <h5>Name of the Product</h5>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          Brnad Name
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-2 d-flex align-items-center'>
          <div><h6>Size:</h6></div>
        </div>
        <div className='col-10 d-flex justify-content-start'>
          <div className='pe-3'> 2 Meter </div>
          <div className=''> 4 Meter </div>
        </div>
      </div>
      <div className='row'>
        <p>categry Name</p>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card border-0 rounded-0 p-3'>
            <h6>Description</h6>
            <p>all Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;