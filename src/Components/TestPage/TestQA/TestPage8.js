import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage8.css'

export default function TestPage8() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage7"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton8">
            Q8. 최근에 일을 할 때 집중이 잘 되나요?
          </div>
            <Link to="/TestPage9" className="AButton8">A) 집중이 잘 되고 즐겁다.</Link>
          <div>
            <Link to="/TestPage9" className="BButton8">B) 집중이 안 되고 지친다.</Link>
          </div>
          <div className='num'>8/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}