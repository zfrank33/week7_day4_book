// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import { CancelToken } from 'apisauce'
const source = CancelToken.source()
let cancelToken = source.token
export const BookApi = () => create({
    baseURL: 'https://cae-bootstore.herokuapp.com',
    cancelToken: cancelToken
})


export default BookApi;