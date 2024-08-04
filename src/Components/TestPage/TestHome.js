import backbotton from './Link4_6.png'
import whaleImage from './whaleImage.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';

import './TestHome.css'

export default function TestHome() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/Main"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector1" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <img src={whaleImage} className="whaleimgage" width="456" height="300"></img>
          <div className="simlitest">추천 심리 테스트</div>
          <div className="milkyou">우유부단한 당신!</div>
          <div className="proselector">프로 결정러가 되!</div>
          <div className="testButtonH">
            <Link to='/TestPage1' className="goTest">테스트 시작!</Link>
          </div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}



