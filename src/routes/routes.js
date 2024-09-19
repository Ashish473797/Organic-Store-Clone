import Category from "../pages/category/Category";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product"

const routes = [
    {
        id: 1,
        name: "home",
        path: "/",
        page: Home
    },
    {
        id: 2,
        name: "shop",
        path: "/shop",
        page: Category
    },
    {
        id: 3,
        name: "category",
        path: "/shop/:category",
        page: Category
    },
    {
        id: 4,
        name: "product",
        path: "/shop/products/:product",
        page: Product
    }
]

export default routes;