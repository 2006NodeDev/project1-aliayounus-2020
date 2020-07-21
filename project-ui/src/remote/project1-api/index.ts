//this index is going to be for setting up the base axios client
import axios from 'axios'


// we will use this object to send off all of the other request we make to the project1 api
export const project1Client = axios.create({
    baseURL: 'http://localhost:2005',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})