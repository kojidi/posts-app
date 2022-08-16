import {useState, useContext, useEffect} from 'react';
import PostsContext from '../../context/PostsContext';
import Card from '../../shared/Card/Card';
import './PostForm.scss';

const PostForm = () => {

    const [id, setId] = useState(null)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [info, setInfo] = useState({
        likes: false,
        comments: '0',
        rate: '0' 
    })

    const {addPost, isEditing, updatePost} = useContext(PostsContext);

    
    useEffect(() => {

        if(isEditing.edit) {
            setId(isEditing.post.id)
            setTitle(isEditing.post.title)
            setContent(isEditing.post.content)
            setInfo({
                likes: isEditing.post.info.likes,
                comments: isEditing.post.info.comments,
                rate: isEditing.post.info.rate
            })
        }

    }, [isEditing])


    const handleChange = (e) => {
        if(e.target.dataset.name === 'title') {
            setTitle(e.target.value);
        } else if(e.target.dataset.name === 'content') {
            setContent(e.target.value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id,
            title,
            content,
            info
        }

        if(!isEditing.edit) {
            addPost(newPost)
        } else {
            updatePost(newPost)
        }
        setId(null);
        setTitle("");
        setContent("");
        setInfo({
            likes: false,
            comments: '0',
            rate: '0'
        })
    }

  return (
    <div className="container">
        <div className="post-form-container">
            <Card className="card">
                <div className="post-form">
                    <h2>Add New Post</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <input data-name="title" type="text" placeholder="Post Title" value={title} onChange={handleChange}/>
                            <textarea data-name="content" type="text" placeholder="Your Post Content ..." value={content} onChange={handleChange}/>
                            <button type="submit" onClick={handleSubmit}>{isEditing.edit ? "Update Post" : "Add Post"}</button>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default PostForm