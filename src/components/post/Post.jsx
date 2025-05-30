import { MoreVert } from '@mui/icons-material';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.find((u) => u.id === post?.userId)?.profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUserName'>
              {Users.find((u) => u.id === post?.userId)?.username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={post.photo} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src='/like.png'
              alt=''
              className='likeIcon'
              onClick={handleLike}
            />
            <img
              src='/heart.png'
              alt=''
              className='likeIcon'
              onClick={handleLike}
            />
            <span className='postLikeCounter'>{like} people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
