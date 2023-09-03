import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/ProductReducer';
import { allProducts } from '../data/products';

const AppContext = createContext();

const API = allProducts;

const initialState = {
      isLoading: false,
      isError: false,
      products: [],
      featureProducts: [],
      isSingleLoading: false,
      singleProduct: {},
};

const DataProvider = ({ children }) => {

      const [state, dispatch] = useReducer(reducer, initialState);

      const getProducts = async () => {
            dispatch({ type: "SET_LOADING" });
            try {
                  const res = await axios.get();
                  const products = await res.data;
                  dispatch({ type: "SET_PRODUCT_DATA", payload: products });
            } catch (error) {
                  dispatch({ type: "API_ERROR" });
            }

      };

      // single product

      const getSingleProduct = async () => {
            dispatch({ type: "SET_SINGLE_LOADING" });
            try {
                  const res = await axios.get();
                  const singleProduct = await res.data;
                  dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
            } catch (error) {
                  dispatch({ type: "API_SINGLE_ERROR" });
            }
      };

      useEffect(() => {
            getProducts(API);
      }, []);

      return (<AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
      </AppContext.Provider>
      );
};

// custom hooks

const useGlobalDataContext = () => {
      return useContext(AppContext);
};


export { DataProvider, AppContext, useGlobalDataContext };