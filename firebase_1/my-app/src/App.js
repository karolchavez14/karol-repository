import './App.css';
import Auth from './components/auth';
import Nav from './components/nav';
import { db } from "./config/firebase";
import {getDocs, collection} from 'firebase/firestore';
import {useState, useEffect} from 'react'

function App() {
  const [postsList, setPostsList] = useState([]);

  const postsCollectionRef = collection(db, "Posts") //saving the variable that indicates which collection we want acsess
  
  useEffect(() => { // you cant make a use effect async, and we needed async in order to make it work
      async function getPosts()  {
      // reading the data
      // Set the posts
      try { 
        const data = await getDocs(postsCollectionRef) // gets all the collections from firestore
        const filteredData = data.docs.map((doc)=>({...doc.data(),id: doc.id}));
        setPostsList(filteredData);
      } catch(err) {
        alert(err)
        }
      }
      getPosts();
    }, []);

return (
    <div className="App">
      <Nav></Nav>
      <Auth></Auth>
    <div>
    {postsList.map((posts)=> (
      <div>
          <h1> Title: {posts.Title}</h1>
          <p> Date: {posts.Date?.toDate().toLocaleString()}</p>
          <p>By: {posts.Author}</p>
          <p> Location: {posts.location}</p>
          <img src={posts.ImageURL}></img>
          </div>
      ))}
    </div>
    </div> 
  );
}

export default App;
