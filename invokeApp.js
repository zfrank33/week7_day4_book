import logo from './logo.svg';
import './App.css';



import logInApi from './components/LogInApi'
import bookRun from './components/BookRun'
import userApi from './components/UserApi'

function App() {

  

  
  const login = async ()=>{
      const {user, error} = await logInApi.getUser();
      console.log(error?error:"It works")
      console.log(user)
  
  }
  

  
  // const s_get = async () =>{
  //     const {error, categories} = await apiCat.get(cancelToken)
  //     console.log(error?error:"It works")
  //     console.log(categories)
  // }
  
  const user_post = async () =>{
      const {error} = await userApi.post('Gummy')
      console.log(error?error:"It works")
  }
  
  const user_put = async () =>{
      const {error} = await userApi.put(2,'No Gio')
      console.log(error?error:"It works")
  }
  
  const cat_del = async () =>{
      const {error} = await userApi.del(2)
      console.log(error?error:"It works")
  }
  

  
  const book_get = async () =>{
      const {error, books} = await bookRun.getBook()
      console.log(error?error:"It works")
      console.log(books)
  }
  
  



  return (
    <div className="App">
      <p>Book Api with APi Sauce</p>

    </div>
  );
}

export default App;
