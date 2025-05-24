import './home.css';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import TopBar from '../../components/topBar/TopBar';

export default function Home() {
  return (
    <>
      <TopBar />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
