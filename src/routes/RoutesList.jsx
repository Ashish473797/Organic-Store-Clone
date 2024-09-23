import { Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import PageNotFound from "../pages/page-not-found/PageNotFound.jsx";

function RoutesList() {
  return (
    <Routes>
        {routes.map((item) => (
            <Route key={item.id} path={item.path} Component={item.page} />
        ))}
        <Route path="/*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default RoutesList