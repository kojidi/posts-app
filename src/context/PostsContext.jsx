import { createContext, useState, useEffect } from "react";

const PostsContext = createContext();

export const PostsProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEditing, setIsEditing] = useState({
        post: [],
        edit: false
    })
  
    useEffect(() => {
      data()
    }, [])
    
  
    const data = async () => {
      const response = await fetch("/posts?_sort=id&_order=desc");
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

    const deletePost = async (id) => {
        if(window.confirm("Are you sure to delete?")) {
            const response = await fetch (`/posts/${id}`, {method: 'DELETE'});
            if(response.status === 200 && response.ok === true) {
                setPosts(posts.filter(post => post.id !== id))
            }
        }
        
    }

    const editPost = (post) => {
        setIsEditing({
            post,
            edit: true
        })
    }

    const updatePost = async (post) => {
        const response = await fetch(`/posts/${post.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })

        const data = await response.json();
        
        if(response.status === 200 && response.ok === true) {
            setPosts(posts.map(post => (post.id === data.id ? data : post)))
            setIsEditing({post: [], edit: false})
        }
    }

    const likePost = async (id) => {

        let likedPost = posts.filter(post => post.id === id)[0];
        likedPost.info.likes = !likedPost.info.likes;

        const response = await fetch(`/posts/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(likedPost)
        })

        const data = await response.json();

        if(response.status === 200 && response.ok === true) {
            setPosts(posts.map(post => (post.id === data.id ? data : post)))
        }
    }

    return (
        <PostsContext.Provider
            value={{
                posts,
                isLoading,
                isEditing,
                addPost,
                deletePost,
                editPost,
                updatePost,
                likePost
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}

export default PostsContext