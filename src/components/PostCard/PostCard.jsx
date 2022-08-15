import { RiMore2Fill, RiHeartLine, RiHeartFill, RiEdit2Fill, RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCommentDots } from 'react-icons/fa'
import Card from '../../shared/Card/Card';
import './PostCard.scss';
import avatar from '../../assets/img/avatar.webp'

const PostCard = ({post}) => {
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
                    <RiHeartLine className="heart icon" />
                    {/* <RiHeartFill className="heart icon" /> */}
                    <div className="icon-count">
                        <div className="count">{post.info.comments}</div>
                        <FaCommentDots className="icon" />
                    </div>
                </div>
                <div className="right-side">
                    <RiEdit2Fill className="icon" />
                    <RiDeleteBin6Fill className="icon" />
                    <span className="rate">Rate: {post.info.rate}</span>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default PostCard