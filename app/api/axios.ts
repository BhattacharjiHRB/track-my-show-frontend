import axios from 'axios'

export const setTokenToLocalStorage = (token: string) =>{
    return localStorage.setItem('token', token);
}

const getTokenToLocalStorage = () =>{
    return localStorage.getItem('token');
}


// API config
export const fetchApi = () =>{

    const storageToken = getTokenToLocalStorage();

    return axios.create({
        baseURL: 'https://express-bf4s.onrender.com/api/v1/',
        headers: {
            
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storageToken}`,  
        }
    })
}

// Authentication API config
export const authApi = axios.create({
    baseURL: 'https://express-bf4s.onrender.com/api/v1/',
    headers:{
        'Content-Type': 'application/json',
        
    }
})

