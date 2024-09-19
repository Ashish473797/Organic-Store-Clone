import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SiteDataContext = createContext();

function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState({
    siteLogo: "",
    navbar: { leftLinks: [], rightLinks: [] },
    serviceCard: [],
    SellingProductsId: [],
    trendingProductsId: [],
    sidebarProductsId: [],
    freshArrivals: [],
  });

  async function fetchSiteData() {
    try {
      const response = await axios.get("https://run.mocky.io/v3/6b18ed5b-9b7a-4a03-97a8-f1ce7d7994e8");
      setSiteData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSiteData();
  }, []);

  return (
    <SiteDataContext.Provider value={siteData}>
      {children}
    </SiteDataContext.Provider>
  );
}

export default SiteDataProvider;
