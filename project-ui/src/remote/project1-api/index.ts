//this index is going to be for setting up the base axios client
import axios from 'axios'
import { lbBaseUrl } from '../../environment'


// we will use this object to send off all of the other request we make to the project1 api
export const project1Client = axios.create({
    baseURL:lbBaseUrl,
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})