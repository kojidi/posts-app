import { useState } from "react";
import Header from "./components/Header/Header";
import postsData from "./data/postsData";

function App() {

  const [posts, setPosts] = useState(postsData) 

  return (
    <div className="app">
      <Header />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
