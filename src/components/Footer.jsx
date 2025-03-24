export default function Footer({ socialLinks }) {
    return (
        <footer>
            <section id="our-links">
                <div className="row container">
                    <div className="col-5 d-flex">
                        <div>
                            <h3>DC COMICS</h3>
                            <ul>
                                <li><a href=""></a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                            </ul>
                            <h3>SHOP</h3>
                            <ul>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>DC</h3>
                            <ul>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>SITES</h3>
                            <ul>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                                <li><a href="">Lorem</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7" style={{ backgroundImage: "URL('/img/dc-logo-bg.png')", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "100%" }}></div>
                </div>
            </section>
            <section id="our-social">
                <div className="container row">
                    <div>
                        <a href=""><button type="button">SIGN-UP NOW!</button></a>
                    </div>
                    <div>
                        <div className="flex-container">
                            <h3>FOLLOW US</h3>
                            <ul className="d-flex">
                                {
                                    socialLinks.map(link => (
                                        <li>
                                            <a href={link.url}>
                                                <img src={link.img} alt={link.name} />
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}