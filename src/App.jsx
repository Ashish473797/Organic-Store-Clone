import CommonLayout from "./layouts/common-layout/CommonLayout";
import RoutesList from "./routes/Routes.jsx";

import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/productActions.js";
import { fetchSiteData } from "./redux/actions/siteActions.js";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductData());
    dispatch(fetchSiteData());
  },[dispatch])

  return (
        <CommonLayout>
          <RoutesList />
        </CommonLayout>
  );
}

export default App;
