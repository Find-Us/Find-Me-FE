import backbotton from './Link4_6.png'
import whaleImageL from './whaleImageLonly.jpg'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';

import './TestResultLonly.css'

export default function TestResultLonly() {
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
            <div className="TestButtonl">심리테스트 결과</div>
            <div className="LonlyButton"> 외로움</div>
            <img src={whaleImageL} className="whaleimg" width="220" height="200"></img>
            <div> <Link to='/Recommend' className="RecommendButtonl">컨텐츠 추천받으러 가기 ! </Link></div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVectorr" width="168" height="167" src={v3}></img>
          <img className="rrightVectorr" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}