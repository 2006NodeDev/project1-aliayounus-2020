import { project1Client } from "."
//import { User } from "../../models/User";



export const project1Login = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await project1Client.post('/login', credentials)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}