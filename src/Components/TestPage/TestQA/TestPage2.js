import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage2.css'

export default function TestPage2() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage1"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton2">
            Q2. 하루 일과를 마친 후에 어떻게 느끼나요?
          </div>
            <Link to="/TestPage3" className="AButton2">A) 기분이 좋고 만족스럽다.</Link>
          <div>
            <Link to="/TestPage3" className="BButton2"> B) 피곤하고 지친다.</Link>
          </div>
          <div className='num'>2/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}