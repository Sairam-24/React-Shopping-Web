 import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";





export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <div className="bg-dark text-white m-2 p-2 align-items-center justify-content-between d-flex">
                <div>Shopper.</div>
                <div>
                    <span className="me-2"><Link className="text-decoration-none text-white" to={`/home`}>Home</Link></span>
                    <span className="me-2">Electronics</span>
                    <span className="me-2">Men's Clothing</span>
                    <span className="me-2">Women's Clothing</span>
                    <span className="me-2">Jewelery</span>
                </div>

                <div>
                    <span className="bi bi-person fill me-2"></span>
                    <span className="bi bi-heart me-2"></span>
                    <span className="bi bi-search me-2"></span>
                    <span className="bi bi-cart me-2"></span>
                </div>

            </div>
            <Routes>
                <Route path="home" element={<ShoppingHome/>}></Route>
                <Route path="/" element={<ShoppingHome/>}></Route>
                <Route  path="/products/:catName" element={<ShoppingProducts/>}/>
                <Route  path="/details/:prodid" element={<ShoppingDetails/>}/>
                <Route path="*" element={<div className="text-danger"><h2>Error Page Not Found</h2></div>}/>
            </Routes>
            </BrowserRouter>
            

        </div>
    )
}
