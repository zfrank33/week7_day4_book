import  BookApi from './BookApi.js';

 
const getUser = async () =>{
    let error
    let res

    const response = await BookApi().get('/login')
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
const logInApi={
    getUser,
    
}

export default logInApi
