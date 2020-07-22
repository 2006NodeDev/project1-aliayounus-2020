import { project1Client } from ".";


export const deleteUserById = async (userId:number) =>{

    try{
        let response = await project1Client.delete(`/users/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        console.log('we should probably handle this');   
    }
}