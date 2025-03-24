import menuLinks from "./data/links"
export default function Header() {

    return (
        <header>
            <div className="container d-flex" id="navBar">
                <a href=""><img src="/img/dc-logo.png" alt="" /></a>
                <div className="d-flex" id="navMenu">
                    {
                        menuLinks.map(link => (
                            <a key={link.id} href={link.url}>{link.name}</a>
                        ))
                    }
                </div>
            </div >
        </header >
    )
}