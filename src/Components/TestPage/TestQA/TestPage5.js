import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage5.css'

export default function TestPage5() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage4"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton5">
            Q5. 평소에 스트레스를 어떻게 관리하나요?
          </div>
            <Link to="/TestPage6" className="AButton5">A) 스스로 잘 관리하고 있다.</Link>
          <div>
            <Link to="/TestPage6" className="BButton5">B) 스트레스가 많고 지친다.</Link>
          </div>
          <div className='num'>5/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}