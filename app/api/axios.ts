import axios from 'axios'


const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjk3ODA4MTMzLCJleHAiOjE2OTc4MTE3MzN9.ddoBMeid97VFM3GugHQMYmCkYtGVNEqeSLzaP4aW8nE'

// API config
export const fetchApi = axios.create({
    baseURL: 'https://express-bf4s.onrender.com/api/v1/',
    headers: {
        
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,  
    }
})

// Authentication API config
export const authApi = axios.create({
    baseURL: 'https://express-bf4s.onrender.com/api/v1/',
    headers:{
        'Content-Type': 'application/json',
        
    }
})

