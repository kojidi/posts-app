import { useContext } from 'react';
import { RiMore2Fill, RiHeartLine, RiHeartFill, RiEdit2Fill, RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCommentDots } from 'react-icons/fa'
import './PostCard.scss';
import Card from '../../shared/Card/Card';
import avatar from '../../assets/img/avatar.webp'
import PostsContext from '../../context/PostsContext';

const PostCard = ({post}) => {

    const {deletePost, editPost} = useContext(PostsContext)

    return (
        <Card>
            <div className="post-card">
                <div className="top">
                    <div className="left-side">
                        <img className="user-avatar" src={avatar} alt="User Avatar" />
                        <div>
                            <h3>Hamid Rajabi</h3>
                            <span className="occupation">Developer</span>
                        </div>
                    </div>
                    <div className="right-side">
                        <RiMore2Fill className="icon" />
                    </div>
                </div>
                <div className="middle">
                    <h4 className="title">{post.title}</h4>
                    <p className="content">
                        {post.content}
                    </p>
                </div>
                <div className="bottom">
                    <div className="left-side">
                        {post.info.likes ? 
                            <RiHeartFill className="heart liked icon" />
                        :
                            <RiHeartLine className="heart icon" />
                        }
                        <div className="icon-count">
                            <div className="count">{post.info.comments}</div>
                            <FaCommentDots className="icon" />
                        </div>
                    </div>
                    <div className="right-side">
                        <RiEdit2Fill className="icon" onClick={() => editPost(post)}/>
                        <RiDeleteBin6Fill className="icon" onClick={() => deletePost(post.id)}/>
                        <span className="rate">Rate: {post.info.rate}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PostCard