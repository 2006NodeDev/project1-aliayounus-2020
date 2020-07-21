import { project1Client } from ".";


export const GetAllUsers = async () =>{
    try{
        let response = await project1Client.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');
        
        
    }
}