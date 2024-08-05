import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage12.css'

export default function TestPage12() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage11"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp12" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp12" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton">
            Q12. 최근 긍정적인 변화를 느낀 적이 있나요?
          </div>
            <Link to="/TestResult" className="AButton">A) 긍정적인 변화를 느끼고 즐겁다.</Link>
          <div>
            <Link to="/TestResult" className="BButton">B) 긍정적인 변화를 느끼지 못하고 외롭다.</Link>
          </div>
          <div className='num'>12/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}