import {project1Client} from '.'
import { User } from '../../models/User';



export const EditUser = async (updateUser:User) =>{

try{
    let res = await project1Client.patch('/users', updateUser)
    console.log(res);
    return res.data
}
catch(e){
    console.log(e);
    throw e
}
}