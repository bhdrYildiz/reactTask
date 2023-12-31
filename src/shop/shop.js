import React from "react"
import "./shop2.css";
import { PRODUCTS } from "../products"
import { Product } from "./product"

export const Shop = () => {
    return (
        <div className="shop">
            <div className="products">
               {PRODUCTS.map((product) => (
                <Product data={product}></Product>
               ))}
               
            </div>
        </div>
    )
}