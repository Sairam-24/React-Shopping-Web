import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function ShoppingProducts(){

    const[products ,setProducts]=useState([{}])

    const param = useParams()

    useEffect(()=>{

        axios({
            method :'get',
            url:`http://fakestoreapi.com/products/category/${param.catName}`
        })
        .then(response=>{setProducts(response.data)})
        
    },[])
    return(
        <div className="container-fluid">
            <h2>{param.catName}Products</h2>
            <div className="d-flex">
                {
                    products.map(product=>
                        <div key={product.id}>
                            <Link to={`/details/${product.id}`}>
                            <img className="me-2" src={product.image} width="100" height="100"/>
                            </Link>

                        </div>
                    )
                 }

            </div>
            <Link to="/home">Back to home </Link>
        </div>
    )
}
