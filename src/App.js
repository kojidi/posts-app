import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";
import { PostsProvider } from "./context/PostsContext";


function App() { 

  return (
    <div className="app">
      <Header />
      <PostsProvider>
        <PostForm />
        <div className="container"><h2 style={{width: "fit-content", padding: '5px 10px 2px', margin: "30px auto 20px", textAlign: 'center', backgroundColor: '#222', color: '#fff'}}>POSTS</h2></div>
        <Posts />
      </PostsProvider>
    </div>
  );
}

export default App;
