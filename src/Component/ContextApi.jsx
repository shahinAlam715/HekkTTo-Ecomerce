import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

let Apidata = createContext()

const ContextApi = ({children}) => {

    let [data, setdata] = useState([])

    let getdata = ()=>{
        axios.get(`https://dummyjson.com/products?limit=${194}`).then((response)=>{
                setdata(response.data.products);
                
        })
    }
    useEffect(()=>{
        getdata()
    },[])

  return (
    <>
    <Apidata.Provider value={data}>{children}</Apidata.Provider>
    </>
  )
}

export {ContextApi, Apidata}