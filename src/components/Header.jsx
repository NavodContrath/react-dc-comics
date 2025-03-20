export default function Header() {
    return (
        <header>
            <div className="container d-flex" id="navBar">
                <a href=""><img src="./public/img/dc-logo.png" alt="" /></a>
                <div id="nav-menu" className="d-flex">
                    <a href="">CHARACTERS</a>
                    <a href="" style={{ color: "#0282f9", borderBottom: "5px solid #0282f9" }}>COMICS</a>
                    <a href="">MOVIES</a>
                    <a href="">TV</a>
                    <a href="">GAMES</a>
                    <a href="">COLLECTIBLES</a>
                    <a href="">VIDEOS</a>
                    <a href="">FANS</a>
                    <a href="">NEWS</a>
                    <a href="">SHOP</a>
                </div>
            </div >
        </header >
    )
}