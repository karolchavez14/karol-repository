import './App.css';
import Auth from './components/auth';
import Nav from './components/nav';
import Post from './components/post';

function App() {

return (
    <div className="App">
      <Nav></Nav>
      <Auth></Auth>
      <Post></Post>
    </div> 
  );
}

export default App;
