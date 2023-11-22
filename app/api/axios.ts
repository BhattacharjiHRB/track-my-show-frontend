import axios from 'axios'


const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjk3ODA4MTMzLCJleHAiOjE2OTc4MTE3MzN9.ddoBMeid97VFM3GugHQMYmCkYtGVNEqeSLzaP4aW8nE'

export const fetchApi = axios.create({
    baseURL: 'https://express-bf4s.onrender.com/api/v1/',
    headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
  
    }
})


