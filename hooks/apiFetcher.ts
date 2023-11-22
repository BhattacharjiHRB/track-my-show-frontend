'use client'
import React, { useEffect, useState } from 'react'
import { fetchApi } from '../app/api/axios'


export const apiFetcher = ( urlPath:string  ) => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSeccess] = useState(false)

  
  const apiFetching = async() => {
    try {
        setLoading(true)
        const response = await fetchApi.post(urlPath)
        console.log(response.data)
        setSeccess(true)
    } catch (error:any) {
        console.log(`Error ${error.message}`)
        setError(true)
    }finally{
        setLoading(false)
    }
  } 

  useEffect(()=>{
    apiFetching()
  },[])

  return [error, loading, success]

}



