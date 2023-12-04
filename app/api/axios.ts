import axios from 'axios'

export const setTokenToLocalStorage = (token: string) =>{
    return localStorage.setItem('token', token);
}

export const getTokenToLocalStorage = () =>{

    if(typeof window !== 'undefined' && localStorage.getItem('token') !== null){
        return localStorage.getItem('token')
    }
    else{
        return null
    }
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

