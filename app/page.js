import React from 'react';
import Header from '/components/Header'; // 헤더 임포트
import Sidebar from '/components/Sidebar'; // 사이드바 임포트

export default function Home(){
  return (
    <div>
      <Header/>
      <Sidebar/>
    </div>
  )
}