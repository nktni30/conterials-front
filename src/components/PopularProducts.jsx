// import { useGlobalDataContext } from '../context/ProductConetxt';
import { Link } from 'react-router-dom';
import Product from './Product';
import { allProducts } from '../data/products';

const PopularProducts = () => {

      return (
            <div className='container my-5'>
                  <div className='row'>
                        <h5 className='text-center text-lg-start'>Popular Products</h5>
                  </div>
                  <div className="row ">
                        <div className='d-flex justify-content-end'>
                        <Link className='text-decoration-none con-orange font-weight-bold' to={'/products'}>All Products</Link>
                        </div>
                  </div>
                  <div className='row row-cols-2 row-cols-lg-4 mt-3 mb-5'>


                        {
                              allProducts && allProducts.map((curElm) => {
                                    return <Product key={curElm.id} {...curElm} />
                              })
                        }

                  </div>
            </div>
      )
}

export default PopularProducts;