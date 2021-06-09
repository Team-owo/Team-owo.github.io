import React from 'react';
import { Link } from 'react-router-dom';
import YouTube, { Options } from 'react-youtube';
import './App.css';
import owo from './img/OWO.png';
import talk from './img/talks.png';
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
  const play={
      padding: "10px 120px 10px 120px"
  }
    return (
      <div className="Team-owo">
          <div className="menu">
            <div className="content">
              <Link className="complete" to="/complete">완료된 프로젝트</Link>
              <Link className="outline" to="/outline">개요</Link>
              <img onClick={() => { this.props.history.push('/') }} src={owo} alt="Team.owo" className="logo"/>
              <Link className="about" to="/about">소개</Link>
              <Link className="projecting" to="/projecting">진행중인 프로젝트</Link>
            </div>
          </div>
          {/* <YouTube videoId={videoID} opts={opts} className="DDANG"/> */}
          <iframe src="https://discord.com/widget?id=670805809760043018&theme=dark" className="discord">a</iframe>
          <p className="into">Team.owo는 마인크래프트의 프로젝트를 짜고 있습니다..</p>
      </div>
    );
  }
}

export default App;
            // <div className="project">
            //   <img src={owo} alt="Team.owo"/>
            //   <div className="info">
            //     <div className="title">Agora</div>
            //    <div className="description">땅과 빈스가 만들고 있는 아고라, 특히 빈스가 아고라에 대해서 의문을 품고 있다 노잼이라고 보이는듯 하나 땅은 의지가 매우 충만해보인다.</div>
            //   </div>