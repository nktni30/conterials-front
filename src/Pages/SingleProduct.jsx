import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalDataContext } from '../context/ProductConetxt';
import ProdSlider from '../components/ProdSlider';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useGlobalDataContext();

  const { id } = useParams();

  const { id: alias, image, name, company, description, category } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>........Loading</div>;
  }

  return (
    <div className='container mt-5'>

          <ProdSlider prodimgs={image} />

      <div className='row mb-2'>
        <div className='col-6'>
           <h5>{name}</h5>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          {company}
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
        <p>{category}</p>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card border-0 rounded-0 p-3'>
            <h6>Description</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;