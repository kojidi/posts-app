import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";


function App() {
  
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    data()
  }, [])
  

  const data = async () => {
    const response = await fetch("/posts/?_sort=id&_order=desc");
    const data = await response.json()
    setPosts(data)
    setIsLoading(false)
  }

  const addPost = async (newPost) => {
    const response = await fetch("/posts", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPost)
    })

    const data = await response.json()
    setPosts([data, ...posts]);

  }


  return (
    <div className="app">
      <Header />
      <PostForm Submit={addPost}/>
      {isLoading ? 
        <LoadingSpinner />
      :
        <Posts posts={posts}/>
      }
    </div>
  );
}

export default App;
