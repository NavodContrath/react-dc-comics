import ComicList from "./Comic-list"
export default function Main({ comics }) {
    return (
        <main>
            <div id="jumbotron" ></div>
            <ComicList comics={comics} />
            <div id="tool-bar" >
                <div className="container d-flex">
                    <a href="" className="d-flex"><img src="img/buy-comics-digital-comics.png" alt="" />DIGITAL COMICS</a>
                    <a href="" className="d-flex"><img src="img/buy-comics-merchandise.png" alt="" />DC MERCHANDISE</a>
                    <a href="" className="d-flex"><img src="img/buy-comics-subscriptions.png" alt="" />SUBSCRIPTIONS</a>
                    <a href="" className="d-flex"><img src="img/buy-comics-shop-locator.png" alt="" />COMIC SHOP LOCATOR</a>
                    <a href="" className="d-flex"><img src="img/buy-dc-power-visa.svg" alt="" />DC POWER VISA</a>
                </div>
            </div>
        </main>
    )
}