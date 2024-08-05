import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './TestPage3.css'

export default function TestPage3() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage2"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortp" width="150" height="140" src={v1}></img>
          <img className="lrightVectortp" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton3">
            Q3. 최근 지인과의 대화에 어떤 감정을 느꼈나요?
          </div>
            <Link to="/TestPage4" className="AButton3"> A) 즐겁고 편안하다.</Link>
          <div>
            <Link to="/TestPage4" className="BButton3"> B) 외롭고 소외감을 느꼈다.</Link>
          </div>
          <div className='num'>3/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}