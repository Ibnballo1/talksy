import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src='/person/1.jpeg' alt='' className='postProfileImg' />
            <span className='postUserName'>Raslaan Bello</span>
            <span className='postDate'>5 mins ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey! it's my first post:)</span>
          <img src='/post/1.jpeg' alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='/like.png' alt='' className='likeIcon' />
            <img src='/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>32 people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
