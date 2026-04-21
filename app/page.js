import React from 'react';
import Image from 'next/image'
// Header, Sidebar, Script import 제거
import SpinningCube from '/components/spinningCube.js'
import Clock from '/components/Clock.js'

export default async function Home(){
    
  return (
    // <div className="is-preload"> 제거
    // <div id="wrapper"> 제거
    // <div id="main"> 제거
    // <div className="inner"> 제거
    // <Header></Header> 제거
    //테스트용 주석
    // 콘텐츠만 남김
    <>
      {/* <!-- Banner --> */}
      <section id="banner">
                            <div className="content">
                                <header>
                                    <h1>안녕하세요! 오재환입니다.<br />
                                        만나서 반가워요</h1>
                                    <p>공부 겸 실험적 프로젝트로로로 시작하게 된 웹사이트입니다.</p>
                                </header>
                                <p>고등학생 때 하던 활동에서 영감을 받아 나만의 웹사이트 제작을 시작하게 되었습니다. 내 영문이름으로 된 웹사이트 주소를 가지고 싶었습니다.</p>
                                <Clock />
                                <ul className="actions">
                                    <li><a href="#" className="button big">Learn More</a></li>
                                </ul>
                            </div>
                            <span className="image object" style={{ position: 'relative', minHeight: '500px' }}>
                                <Image 
                                    src="/images/pic10.jpg" 
                                    alt="" 
                                    fill={true}
                                    priority={true}
                                    sizes="(max-width: 736px) 100vw, 40vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </span>
      </section>

      {/* <!-- Section --> */}
      <section>
                            <header className="major">
                                <h2>Erat lacinia</h2>
                            </header>
                            <div><SpinningCube /></div>
                            <div className="features">
                                <article>
                                    <span className="icon fa-gem"></span>
                                    <div className="content">
                                        <h3>Portitor ullamcorper</h3>
                                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon solid fa-paper-plane"></span>
                                    <div className="content">
                                        <h3>Sapien veroeros</h3>
                                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon solid fa-rocket"></span>
                                    <div className="content">
                                        <h3>Quam lorem ipsum</h3>
                                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon solid fa-signal"></span>
                                    <div className="content">
                                        <h3>Sed magna finibus</h3>
                                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    </div>
                                </article>
                            </div>
                        </section>

                        {/* <!-- Section --> */}
                        <section>
                            <header className="major">
                                <h2>Ipsum sed dolor</h2>
                            </header>
                            <div className="posts">
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic01.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Interdum aenean</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic02.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Nulla amet dolore</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic03.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Tempus ullamcorper</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic04.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Sed etiam facilis</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic05.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Feugiat lorem aenean</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image" style={{ position: 'relative', minHeight: '300px' }}>
                                        <Image 
                                            src="/images/pic06.jpg" 
                                            alt="" 
                                            fill={true}
                                            sizes="(max-width: 736px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </a>
                                    <h3>Amet varius aliquam</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                            </div>
                        </section>
    </>
    // </div> (inner) 제거
    // </div> (main) 제거
    // <Sidebar/> 제거
    // </div> (wrapper) 제거
    // Script 태그들 제거
    // </div> (is-preload) 제거
  )
}