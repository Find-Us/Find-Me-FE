import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage9.css'

export default function TestPage9() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage8"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton9">
            Q9. 새로운 일에 도전하는 것을 어떻게 느끼나요?
          </div>
            <Link to="/TestPage10" className="AButton9">A) 즐거움과 흥미를 느낀다.</Link>
          <div>
            <Link to="/TestPage10" className="BButton9">B) 걱정되고 지친다.</Link>
          </div>
          <div className='num'>9/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}