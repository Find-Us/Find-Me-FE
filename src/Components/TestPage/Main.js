// main.js
import backbotton from './Link.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import d1 from './draw1.png'
import d2 from './draw2.png'
import d3 from './draw3.png'
import d4 from './draw4.png'

const Main = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const toggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
   };

   return (
      <>
         <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Header 컴포넌트 생략 */}
            <div style={{ height: '3px', backgroundColor: '#D3D3D3', width: '100%' }}></div>
            <div style={{ padding: '20px' }}></div>
         </header>
         <div>
         <div clasName="header">
          <span className="FINDME">FIND_ME</span>
        </div>
         </div>
         {isLoggedIn ? (
            <div className="loginstyle">
               <h5>Personalized Recommendations & Share</h5>
               <div className="title">Find Yourself <br />by Culture Life</div>
               <div className="msubtitle">
                  당신의 내면을 탐험하고, 맞춤형 추천을 통해
                  <br />마음의 여정을 떠나보세요
                  <br />새로운 이야기와 세계가 당신을 기다립니다!
               </div>
            </div>
         ) : (
            <div className="notloginstyle">
               <h5>Personalized Recommendations & Share</h5>
               <div className="title">Find Yourself by Culture Life</div>
               <div className="msubtitle">
                  당신의 내면을 탐험하고, 맞춤형 추천을 통해 마음의 여정을 떠나보세요
                  <br />새로운 이야기와 세계가 당신을 기다립니다!
               </div>
            </div>
         )}

         <div style={{ position: 'relative', height: '100vh' }}>
            <img className="lleftVector" src={d1}></img>
            <img className="lrightVector1" src={d2}></img>
            <img className="rleftVector" src={d3}></img>
            <img className="rrightVector"  src={d4}></img>
         </div>

         {isLoggedIn ? (
            <div className="button-container-login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Link to="/TestHome" className="ybutton_test">테스트</Link>
               <Link to="/community" className="ybutton_com">커뮤니티</Link>
            </div>
         ) : (
            <div className="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Link to="/TestHome" className="nbutton_test">테스트</Link>
               <Link to="/login" className="nbutton_log">로그인</Link>
            </div>
         )}
      </>
   );
};

export default Main;
