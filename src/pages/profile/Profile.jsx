import './profile.css';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import TopBar from '../../components/topBar/TopBar';

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src='./post/3.jpeg'
                alt='cover picture'
              />
              <img
                className='profileUserImg'
                src='./person/7.jpeg'
                alt='cover picture'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Raslaan Bello</h4>
              <span className='profileInfoDesc'>Hello my friends</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
