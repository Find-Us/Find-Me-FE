import backbotton from './Link4_6.png'
import whaleImageA from './whaleImageAngry.jpg'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';

import './TestResultAngry.css'

export default function TestResultAngry() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/Main"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <img src={whaleImageA} className="whaleimg" width="546" height="351"></img>
          <div className="TestButtona">심리테스트 결과</div>
          <div className="AngryButton"> 짜증남</div>
          <div className="testButton">
            <Link to='/Recommend' className="RecommendButtona">컨텐츠 추천 받으러 가기 !</Link>  
          </div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVectorr" width="168" height="167" src={v3}></img>
          <img className="rrightVectorr" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}