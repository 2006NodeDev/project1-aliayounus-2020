
import {ProjectClient} from "."


export const webLogin = async(username:string, password:string) =>{
    let credentials = {
        username,
        password
    }
    try{
        let response = await ProjectClient.post('/login' , credentials)
        console.log(response)
        return response.data

    }
     catch(e){
}

}