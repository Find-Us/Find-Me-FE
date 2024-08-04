import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'
import { Link } from 'react-router-dom';

import './TestPage1.css'

export default function TestPage1() {
  return (
    <div clasName="container">
        <span clasName="header">
          <Link to="/TestHome"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </span>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div clasName="middleContainer">
          <div className="QButton1">
            Q1. 최근에 아침에 일어났을 때 기분은 어떤가요?
          </div>
            <Link to="/TestPage2" className="AButton1">A) 활기차고 상쾌하다.</Link>
          <div>
            <Link to="/TestPage2" className="BButton1"> B) 피곤하고 지친다.</Link>
          </div>
          <div className='num'>1/12</div>
        </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}