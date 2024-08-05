import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage4.css'

export default function TestPage4() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage3"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton4">
            Q4. 일을 할 때 동기 부여가 되나요?
          </div>
            <Link to="/TestPage5" className="AButton4">A) 동기 부여가 되어 즐겁게 일함.</Link>
          <div>
            <Link to="/TestPage5" className="BButton4">B) 동기 부여가 부족하고 지친다.</Link>
          </div>
          <div className='num'>4/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}