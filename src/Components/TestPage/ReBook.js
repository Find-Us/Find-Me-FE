import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import {Link} from 'react-router-dom';
import './ReBook.css'

export default function ReMovie() {
  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/Recommend"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVector" width="150" height="140" src={v1}></img>
          <img className="lrightVector" width="150" height="149" src={v2}></img>
        </div>

        <div className="middleContainer">
        <div className='Book'>🔖 책 📚</div>
        <div className="recommendations">
          <div className='Recommend1b'>
            <div className='Title1b'>제목</div>
            <div> <Link to='/Main' className='gotoMain2'>메인화면으로 돌아가기</Link></div>
          </div>

          <div className='Recommend2b'>
            <div className='Title2b'>제목</div>
            <div> <Link to='/Profile' className='saveMyPage2'>결과 My Page 저장하기</Link></div>
          </div>
        </div>
      </div>

        <div clasName="rightContainer">
          <img className="rleftVector" width="168" height="167" src={v3}></img>
          <img className="rrightVector" width="300" height="200" src={v4}></img>
        </div>
      </div>
  )
}