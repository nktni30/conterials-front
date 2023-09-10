import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Sidebar from "./components/Sidebar";
import Whatsapp from "./components/Whatsapp";
import TermsCondition from "./Pages/TermsCondition";
import StoreLocator from "./Pages/StoreLocator";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import ErrorPage from "./Pages/ErrorPage";
import CreateCategory from "./admin/components/craeteCategory";
import CreateBrand from "./admin/components/createBrand";
import CreateSubcategory from "./admin/components/createSubcategory";
import CreateProdcut from './admin/components/createProduct';

function App() {
  return (
    <>

      <Sidebar />
      <Whatsapp />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
        <Route exact path="/storelocator" element={<StoreLocator />} />
        <Route exact path="/termscondition" element={<TermsCondition />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/returnpolicy" element={<ReturnPolicy />} />
        <Route exact path="/createcategory" element={<CreateCategory />} />
        <Route exact path="/createbrand" element={<CreateBrand />} />
        <Route exact path="/createsubcategory" element={<CreateSubcategory />} />
        <Route exact path="/createproduct" element={<CreateProdcut />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
