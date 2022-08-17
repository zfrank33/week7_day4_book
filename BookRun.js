// import { apiClientNoAuth, apiClientTokenAuth } from "./client.js";
import  BookApi from './BookApi.js';



const getBook = async () =>{
    let error
    let res

    const response = await BookApi().get('/book')
    if (response.ok){
        res = response.data
        console.log(res)

    }else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
        console.log(error)

    }
    return {
        error,
        res
    }
}


const bookRun={
    getBook,
    
}

export default BookRun
