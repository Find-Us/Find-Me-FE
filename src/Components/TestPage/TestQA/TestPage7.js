import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage7.css'

export default function TestPage7() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage6"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton7">
            Q7. 타인과의 상호작용에서 어느 쪽에 가깝나요?
          </div>
            <Link to="/TestPage8" className="AButton7">A) 거의 짜증난 적 없다.</Link>
          <div>
            <Link to="/TestPage8" className="BButton7">B) 자주 짜증이 나고 불편하다.</Link>
          </div>
          <div className='num'>7/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}