import Header from '/components/Header.js'
import Sidebar from '/components/Sidebar.js'
import Image from 'next/image'
import Script from 'next/script'

const Elements = () => {
    return (
        <div className="is-preload">

            {/* <!-- Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Main --> */}
                <div id="main">
                    <div className="inner">

                        {/* <!-- Header --> */}
                        <Header></Header>
                        {/* <!-- Content --> */}
                        <section>
                            <header className="main">
                                <h1>Elements</h1>
                            </header>

                            {/* <!-- Content --> */}
                            <h2 id="content">Sample Content</h2>
                            <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.</p>
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <h3>Sem turpis amet semper</h3>
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                </div>
                                <div className="col-6 col-12-small">
                                    <h3>Magna odio tempus commodo</h3>
                                    <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan.</p>
                                </div>
                                {/* <!-- Break --> */}
                                <div className="col-4 col-12-medium">
                                    <h3>Interdum sapien gravida</h3>
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <h3>Faucibus consequat lorem</h3>
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <h3>Accumsan montes viverra</h3>
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
                                </div>
                            </div>

                            <hr className="major" />

                            {/* <!-- Elements --> */}
                            <h2 id="elements">Elements</h2>
                            <div className="row gtr-200">
                                <div className="col-6 col-12-medium">

                                    {/* <!-- Text stuff --> */}
                                    <h3>Text</h3>
                                    <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                        This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                        This is <u>underlined</u> and this is code: <code>{`for (;;) {... }`}</code>.
                                        Finally, this is a <a href="#">link</a>.</p>
                                    <hr />
                                    <h2>Heading Level 2</h2>
                                    <h3>Heading Level 3</h3>
                                    <h4>Heading Level 4</h4>
                                    <hr />
                                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

                                    {/* <!-- Lists --> */}
                                    <h3>Lists</h3>
                                    <div className="row">
                                        <div className="col-6 col-12-small">

                                            <h4>Unordered</h4>
                                            <ul>
                                                <li>Dolor etiam magna etiam.</li>
                                                <li>Sagittis lorem eleifend.</li>
                                                <li>Felis dolore viverra.</li>
                                            </ul>

                                            <h4>Alternate</h4>
                                            <ul className="alt">
                                                <li>Dolor etiam magna etiam.</li>
                                                <li>Sagittis lorem eleifend.</li>
                                                <li>Felis feugiat viverra.</li>
                                            </ul>

                                        </div>
                                        <div className="col-6 col-12-small">

                                            <h4>Ordered</h4>
                                            <ol>
                                                <li>Dolor etiam magna etiam.</li>
                                                <li>Etiam vel lorem sed viverra.</li>
                                                <li>Felis dolore viverra.</li>
                                                <li>Dolor etiam magna etiam.</li>
                                                <li>Etiam vel lorem sed viverra.</li>
                                                <li>Felis dolore viverra.</li>
                                            </ol>

                                            <h4>Icons</h4>
                                            <ul className="icons">
                                                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                                <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                                                <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                                                <li><a href="#" className="icon brands fa-tumblr"><span className="label">Tumblr</span></a></li>
                                            </ul>

                                        </div>
                                    </div>
                                    <h4>Definition</h4>
                                    <dl>
                                        <dt>Item1</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                        </dd>
                                        <dt>Item2</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                        </dd>
                                        <dt>Item3</dt>
                                        <dd>
                                            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
                                        </dd>
                                    </dl>

                                    <h4>Actions</h4>
                                    <ul className="actions">
                                        <li><a href="#" className="button primary">Default</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions small">
                                        <li><a href="#" className="button primary small">Small</a></li>
                                        <li><a href="#" className="button small">Small</a></li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="#" className="button primary">Default</a></li>
                                                <li><a href="#" className="button">Default</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="#" className="button primary small">Small</a></li>
                                                <li><a href="#" className="button small">Small</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="#" className="button primary fit">Default</a></li>
                                                <li><a href="#" className="button fit">Default</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <ul className="actions stacked">
                                                <li><a href="#" className="button primary small fit">Small</a></li>
                                                <li><a href="#" className="button small fit">Small</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h4>Pagination</h4>
                                    <ul className="pagination">
                                        <li><span className="button disabled">Prev</span></li>
                                        <li><a href="#" className="page active">1</a></li>
                                        <li><a href="#" className="page">2</a></li>
                                        <li><a href="#" className="page">3</a></li>
                                        <li><span>&hellip;</span></li>
                                        <li><a href="#" className="page">8</a></li>
                                        <li><a href="#" className="page">9</a></li>
                                        <li><a href="#" className="page">10</a></li>
                                        <li><a href="#" className="button">Next</a></li>
                                    </ul>

                                    {/* <!-- Blockquote --> */}
                                    <h3>Blockquote</h3>
                                    <blockquote>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</blockquote>

                                    {/* <!-- Table --> */}
                                    <h3>Table</h3>

                                    <h4>Default</h4>
                                    <div className="table-wrapper">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Item1</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>29.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item2</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>19.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item3</td>
                                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>29.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item4</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>19.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item5</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>29.99</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>100.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <h4>Alternate</h4>
                                    <div className="table-wrapper">
                                        <table className="alt">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Item1</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>29.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item2</td>
                                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                    <td>19.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item3</td>
                                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                                    <td>29.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item4</td>
                                                    <td>Vitae integer tempus condimentum.</td>
                                                    <td>19.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Item5</td>
                                                    <td>Ante turpis integer aliquet porttitor.</td>
                                                    <td>29.99</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2"></td>
                                                    <td>100.00</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                </div>
                                <div className="col-6 col-12-medium">

                                    {/* <!-- Buttons --> */}
                                    <h3>Buttons</h3>
                                    <ul className="actions">
                                        <li><a href="#" className="button primary">Primary</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="#" className="button large">Large</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                        <li><a href="#" className="button small">Small</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="#" className="button primary large">Large</a></li>
                                        <li><a href="#" className="button primary">Default</a></li>
                                        <li><a href="#" className="button primary small">Small</a></li>
                                    </ul>
                                    <ul className="actions fit">
                                        <li><a href="#" className="button primary fit">Fit</a></li>
                                        <li><a href="#" className="button fit">Fit</a></li>
                                    </ul>
                                    <ul className="actions fit small">
                                        <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                                        <li><a href="#" className="button fit small">Fit + Small</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><a href="#" className="button primary icon solid fa-search">Icon</a></li>
                                        <li><a href="#" className="button icon solid fa-download">Icon</a></li>
                                    </ul>
                                    <ul className="actions">
                                        <li><span className="button primary disabled">Primary</span></li>
                                        <li><span className="button disabled">Default</span></li>
                                    </ul>

                                    {/* <!-- Form --> */}
                                    <h3>Form</h3>

                                    <form method="post" action="#">
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <select name="demo-category" id="demo-category">
                                                    <option value="">- Category -</option>
                                                    <option value="1">Manufacturing</option>
                                                    <option value="1">Shipping</option>
                                                    <option value="1">Administration</option>
                                                    <option value="1">Human Resources</option>
                                                </select>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                                    <label for="demo-priority-low">Low</label>
                                            </div>
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="demo-priority-normal" name="demo-priority"/>
                                                    <label for="demo-priority-normal">Normal</label>
                                            </div>
                                            <div className="col-4 col-12-small">
                                                <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                                    <label for="demo-priority-high">High</label>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-6 col-12-small">
                                                <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                                    <label for="demo-copy">Email me a copy</label>
                                            </div>
                                            <div className="col-6 col-12-small">
                                                <input type="checkbox" id="demo-human" name="demo-human" checked />
                                                <label for="demo-human">I am a human</label>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                                            </div>
                                            {/* <!-- Break --> */}
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="submit" value="Send Message" className="primary" /></li>
                                                    <li><input type="reset" value="Reset" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>

                                    {/* <!-- Image --> */}
                                    <h3>Image</h3>

                                    <h4>Fit</h4>
                                    <span className="image fit"><img src="images/pic11.jpg" alt="" /></span>
                                    <div className="box alt">
                                        <div className="row gtr-50 gtr-uniform">
                                            <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                            {/* <!-- Break --> */}
                                            <div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
                                            <div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
                                        </div>
                                    </div>

                                    <h4>Left &amp; Right</h4>
                                    <p><span className="image left"><img src="images/pic01.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                                    <p><span className="image right"><img src="images/pic02.jpg" alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>

                                    {/* <!-- Box --> */}
                                    <h3>Box</h3>
                                    <div className="box">
                                        <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.</p>
                                    </div>

                                    {/* <!-- Preformatted Code --> */}
                                    <h3>Preformatted</h3>
                                    <pre><code>{`i = 0;

													while (!deck.isInOrder()) {
														print 'Iteration ' + i;
														deck.shuffle();
														i++;
													}

													print 'It took ' + i + ' iterations to sort the deck.';`}
													</code></pre>

                                </div>
                            </div>

                        </section>

                    </div>
                </div>

                {/* <!-- Sidebar --> */}
                <Sidebar />

            </div>

            {/* Scripts */}
            <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/browser.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/breakpoints.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/util.js" strategy="afterInteractive" />
            <Script src="/assets/js/main.js" strategy="afterInteractive" />

        </div>
    )
}
export default Elements;