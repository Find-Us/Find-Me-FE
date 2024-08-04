import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage10.css'

export default function TestPage10() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage9"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton10">
            Q10. 자신이 하는 일에 대한 만족도가 어떤가요?
          </div>
            <Link to="/TestPage11" className="AButton10">A) 만족스럽고 보람을 느낀다.</Link>
          <div>
            <Link to="/TestPage11" className="BButton10">B) 만족스럽지 않고, 짜증이 난다</Link>
          </div>
          <div className='num'>10/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}