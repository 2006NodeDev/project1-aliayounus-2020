import { project1Client } from ".";
import { User } from "../../models/User";

export const project1SaveUser = async (newUser:User) => {
    
    try{
        let response = await project1Client.post('/users', newUser)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}