import PostCard from '../PostCard/PostCard';
import './Posts.scss';

const Posts = ({posts}) => {
  return (
    <div className="container">
        <div className="posts pure-g">
            {posts.map(post => (
                <div key={post.id} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4">

                    <PostCard post={post}/>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Posts