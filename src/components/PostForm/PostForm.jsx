import {useState} from 'react';
import Card from '../../shared/Card/Card';
import './PostForm.scss';

const PostForm = ({Submit}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
            title,
            content,
            info : {
                likes: '',
                comments: '0',
                rate: '0'
            }
        }
        Submit(newPost)

        setContent("");
        setTitle("");
    }

  return (
    <div className="container">
        <Card>
            <div className="post-form">
                <form onSubmit={handleSubmit}>
                    <input data-name="title" type="text" placholder="Post Title" value={title} onChange={handleChange}/>
                    <textarea data-name="content" type="text" placholder="Your Post Content ..." value={content} onChange={handleChange}/>
                    <button type="submit" onClick={handleSubmit}>Add Post</button>
                </form>
            </div>
        </Card>
    </div>
  )
}

export default PostForm