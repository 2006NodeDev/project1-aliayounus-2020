//base for axios client

import axios from 'axios'

export const ProjectClient = axios.create({
    baseURL: 'http://localhost:2005',
    headers:{
        'content-Type': 'application/json'
    },
    withCredentials:true
    
})