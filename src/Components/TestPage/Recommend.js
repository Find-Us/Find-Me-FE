import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './Recommend.css'

export default function Recommend() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestHome"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="Content">컨텐츠 추천</div>
            <div></div>
            <span>            
            <Link to="/ReMovie" className="MovieButton">🎥 영화 🍿</Link>
            </span>
            <span>
            <Link to="/ReBook" className="BookButton">🔖 책 📚</Link>
            </span>
            <div>
            <span>
            <Link to="/ReSong" className="SongButton"> 🎶 노래 🎤</Link>
            </span>
            <span>
            <Link to="/ReAll" className="AllButton"> 🌊 통합 🐳</Link>
            </span>
            </div>
            
        </div>

        <div clasName="rightContainer">
          <img className="rleftVectorrr" width="168" height="167" src={v3}></img>
          <img className="rrightVectorrr" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}