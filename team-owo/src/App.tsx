import React from 'react';
// import { Lin]k } from 'react-router-dom';
import YouTube, { Options } from 'react-youtube';
import './App.css';
import owo from './img/OWO.png';
class App extends React.Component<{history: any}> {
  render(){
    const videoID = "QRzM_xBvEjo";
    const opts: Options = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
      },
    };
    return (
      <div className="Team-owo">
          <div className="menu">
            <div className="content">
              <img onClick={() => { this.props.history.push('/') }} src={owo} alt="Team.owo" className="logo"/>
            </div>
          </div>
          <p className="into">Team.owo는 마인크래프트의 프로젝트를 짜고 있습니다..</p>
          <div className="projects">
            <div className="project">
              <img src={owo} alt="Team.owo"/>
              <div className="info">
                <div className="title">Ruins</div>
                <div className="description">땅과 빈스가 만들고 있는 루인스. 대충 긴글 테스트를 위한 문장임 아주 쓸데 없는 문장이고 루인스를 언제 완성 시킬지 고민이다 언제쯤 완성 될까? 가나다라마바사아자차카타파 철수책상은 철책상이고 내가 그린 기린그림은 너가 그린 기린그림보다 목이 더 긴 기린그림이다</div>
              </div>
            </div>
            <div className="project">
              <img src={owo} alt="Team.owo"/>         
              <div className="info">
                <div className="title">Agora</div>
                <div className="description">땅과 빈스가 만들고 있는 아고라, 특히 빈스가 아고라에 대해서 의문을 품고 있다 노잼이라고 보이는듯 하나 땅은 의지가 매우 충만해보인다.</div>
              </div>
            </div>
          </div>
          <YouTube videoId={videoID} opts={opts} className="DDANG"/>
          <p className="DDANG_comment">이것은 홍보\광고 가 아닙니다!</p>
          
          <iframe src="https://discord.com/widget?id=670805809760043018&theme=dark" title="discord" className="discord"></iframe>
      </div>
    );
  }
}

export default App;