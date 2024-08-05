import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage6.css'

export default function TestPage6() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage5"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton6">
            Q6. 여가 시간, 취미 활동에서 느끼는 감정은 어떤가요?
          </div>
            <Link to="/TestPage7" className="AButton6">A) 즐겁고 만족스럽다.</Link>
          <div>
            <Link to="/TestPage7" className="BButton6">B) 지루하고 외롭다.</Link>
          </div>
          <div className='num'>6/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}