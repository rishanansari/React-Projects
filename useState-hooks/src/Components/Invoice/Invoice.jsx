import React from 'react'
import { useParams,useLocation } from 'react-router-dom';


const Invoice = () => {
    let params = useParams();
    let location = useLocation()
    console.log(params);
    console.log("location",location);
  return (
    <div>Invoice Id Is : {params.invoiceId}</div>
  )
}

export default Invoice;