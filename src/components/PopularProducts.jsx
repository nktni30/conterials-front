// import { useGlobalDataContext } from '../context/ProductConetxt';
import Product from './Product';
import { allProducts } from '../data/products';

const PopularProducts = () => {

      // const { isLoading, featureProducts } = useGlobalDataContext();
      // console.log(
            
      //       featureProducts
      // );

      // if (isLoading) {
      //       return <div>........Loading</div>;
      // }

      return (
            <div className='container py-5'>
                  <div className='row'>
                        <h5 className='text-center text-lg-start'>Popular Products</h5>
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