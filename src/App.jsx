import CommonLayout from "./layouts/common-layout/CommonLayout";
import RoutesList from "./routes/RoutesList.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductData } from "./redux/product-data/ProductSlice.js";
import { fetchSiteData } from "./redux/site-data/siteDataSlice.js";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductData());
    dispatch(fetchSiteData());
  },[])

  return (
        <CommonLayout>
          <RoutesList />
        </CommonLayout>
  );
}

export default App;
