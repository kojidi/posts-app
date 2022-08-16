import { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import PostCard from '../PostCard/PostCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './Posts.scss';

const Posts = () => {

  const {isLoading, posts} = useContext(PostsContext);

  return (
    isLoading ? 
      <LoadingSpinner />
    :
      <div className="container">
          <div className="posts pure-g">
              {(!posts || posts.length === 0) ? 
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4">
                  <h3>There is no post!</h3>
                </div>
              :
                posts.map(post => (
                    <div key={post.id} className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4">
    
                        <PostCard post={post}/>
    
                    </div>
                ))
              }
          </div>
      </div>  
  )
}

export default Posts