import Header from '/components/Header.js'
import Sidebar from '/components/Sidebar.js'
import Image from 'next/image'

const Index = () => {
    return (
        <div className="is-preload">

            {/* <!-- Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Main --> */}
                <div id="main">
                    <div className="inner">

                        {/* <!-- Header --> */}
                        <Header></Header>

                        {/* <!-- Banner --> */}
                        <section id="banner">
                            <div className="content">
                                <header>
                                    <h1>Hi, I’m Editorial<br />
                                        by HTML5 UP</h1>
                                    <p>A free and fully responsive site template</p>
                                </header>
                                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button big">Learn More</a></li>
                                </ul>
                            </div>
                            <span className="image object">
                                <Image src="/images/pic10.jpg" alt="" layout="fill" objectFit="cover" />
                            </span>
                        </section>

                        {/* <!-- Section --> */}
                        <section>
                            <header className="major">
                                <h2>Erat lacinia</h2>
                            </header>
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
                                    <a href="#" className="image"><Image src="/images/pic01.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Interdum aenean</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><Image src="/images/pic02.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Nulla amet dolore</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><Image src="/images/pic03.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Tempus ullamcorper</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><Image src="/images/pic04.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Sed etiam facilis</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><Image src="/images/pic05.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Feugiat lorem aenean</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><Image src="/images/pic06.jpg" alt="" layout="fill" objectFit="cover" /></a>
                                    <h3>Amet varius aliquam</h3>
                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                            </div>
                        </section>

                    </div>
                </div>

                {/* <!-- Sidebar --> */}
                <Sidebar/>

            </div>

            {/* <!-- Scripts --> */}
            <script src="assets/js/jquery.min.js" async></script>
            <script src="assets/js/browser.min.js" async></script>
            <script src="assets/js/breakpoints.min.js" async></script>
            <script src="assets/js/util.js" async></script>
            <script src="assets/js/main.js" async></script>

        </div>
    );
};

export default Index;