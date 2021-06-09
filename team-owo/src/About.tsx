import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './About.css';
import owo from './img/OWO.png';


class About extends Component<{history: any}>{
    about: any;
    constructor(props: any){
        super(props);
        this.about = [];
    }
    render(){
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
                <div className="titles">
                    <div className="title">
                        <div className="subject">주제!</div>
                        <div className="description">강장공장공장장 철수책상은 철 책상이고 내가 그린 기린 그림은 목이 긴 기린 그린 그림 이다. 너가 그린 기린 그림은 목이 짧은 기린 그린 그림이다.강장공장공장장 철수책상은 철 책상이고 내가 그린 기린 그림은 목이 긴 기린 그린 그림 이다. 너가 그린 기린 그림은 목이 짧은 기린 그린 그림이다.</div>
                    </div>
                    <div className="title">
                        <div className="subject">대충 주제!</div>
                        <div className="description">그러니깐 이건 대충 설명이라는것임. 강장공장공장장 철수책상은 철 책상이고 내가 그린 기린 그림은 목이 긴 기린 그린 그림 이다. 너가 그린 기린 그림은 목이 짧은 기린 그린 그림이다.</div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default About;