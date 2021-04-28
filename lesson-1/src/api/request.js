import axios from "axios";
import { config } from "webpack";

class Request {
    constructor (token){
        this.token = token;
        this.request = axios.create({
            baseURL:"http://localhost:8000",
            timeout:1000,

        })
    }

requestWithToken = (token) =>{
    return {
        headers: {
            "x-token": token
        }
    }
}
get = (url) =>{
    config = {}
    if (withAuth){
        config = {...config,...returnthis.requestWithToken(this.token)}
    }

    return this.request.get(url,config)
}


post = (url,params) =>{
    return this.request.get(url,params,{})
}
delete = (url,params) =>{
    return this.request.get(url,params,{})
}
}

export const request = new Request("test token")