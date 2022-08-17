import  BookApi from './BookApi.js';

const get = async () =>{
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


const post = async (catName) =>{
    let error
    const response = await BookApi().post('/user', {name: catName})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later" 
        console.log(error)

    }
    return {
        error
    }
}

const put = async ( id, catName) =>{
    let error
    const response = await BookApi().put('/user'+'/'+id, {name: catName})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
        console.log(error)

    }
    return {
        error
    }
}

const del = async (id) =>{
    let error
    const response = await BookApi().delete('/user'+'/'+id)
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
        console.log(error)

    }
    return {
        error
    }
}

const userApi={
    get,
    post,
    put,
    del
}

export default userApi