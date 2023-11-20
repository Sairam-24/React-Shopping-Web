import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import './shopping.css'

export function ShoppingDetails(){

    const [ProDetail ,setdetails] = useState({id:0 , title:'',image:'',price:'',rating:{rate:0,count:0}})

    const param =useParams()

    useEffect(()=>{
        axios({
            method :'get',
            url:`http://fakestoreapi.com/products/${param.prodid}`
        })
        .then(response=>
            setdetails(response.data)
        )
    },[])

    return(
        <div className="container-fluid">
            <h2>{param.productid}Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{ProDetail.title}</dd>
                <dt>Privew</dt>
                <dd><img className="focus" src={ProDetail.image} width="100px" height="100px"/></dd>
                <dt>Price</dt>
                <dd>{ProDetail.price}</dd>
                <dt>Rating</dt>
                <dd><span className="bi bi-star-fill text-success"></span>{ProDetail.rating.rate} [{ProDetail.rating.count}]</dd>
            </dl>

            <Link to={`/products/${ProDetail.category}`}>Back to Category</Link>

        </div>
    )
}
