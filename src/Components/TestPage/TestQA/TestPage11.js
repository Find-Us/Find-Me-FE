import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage11.css'

export default function TestPage11() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage10"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton11">
            Q11.  문제가 닥쳤을 때 어떤 반응에 가까운가요?
          </div>
            <Link to="/TestPage12" className="AButton11">A) 긍정적으로 해결한다.</Link>
          <div>
            <Link to="/TestPage12" className="BButton11">B) 스트레스를 받고 짜증이 난다.</Link>
          </div>
          <div className='num'>11/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}