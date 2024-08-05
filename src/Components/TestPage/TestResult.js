import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whaleImageR from './whaleImageR.jpg'; // 이미지 파일 경로에 맞게 수정
import backbotton from './Link4_6.png'
import v1 from './Vector1.png'
import v2 from './Vector2.png'
import v3 from './Vector3.png'
import v4 from './Vector4.png'

import './TestResult.css'

function TestResult() {
  const [selectedResult, setSelectedResult] = useState('joy'); // 기본값을 'joy'로 설정

  // 결과에 따른 링크 경로 설정 함수
  const getResultLink = () => {
    switch (selectedResult) {
      case 'joy':
        return '/TestResultJoy';
      case 'lonly':
        return '/TestResultLonly';
      case 'tired':
        return '/TestResultTired';
      case 'angry':
        return '/TestResultAngry';
      default:
        return '/TestResultJoy'; // 기본값으로 설정
    }
  };

  return (
    <div clasName="container">
        <div clasName="header">
          <Link to="/TestPage6"><img className="backbtn" width="80" height="50" src={backbotton}></img></Link>
          <span className="FINDME">FIND_ME</span>
        </div>

        <div clasName="leftContainer">
          <img className="lleftVectortr" width="150" height="140" src={v1}></img>
          <img className="lrightVectortr" width="150" height="149" src={v2}></img>
        </div>

        <div className="middleContainer">
          <img src={whaleImageR} className="whaleimage" width="300" height="250" alt="Whale" />
          <div className="testButton">
          <Link to={getResultLink()} className="goTest">결과 보러 가기 !</Link>
      </div>

        <div clasName="rightContainer">
          <img className="rleftVectorr" width="168" height="167" src={v3}></img>
          <img className="rrightVectorr" width="300" height="200" src={v4}></img>
        </div>
      </div>
    </div>
  );
}

export default TestResult;
