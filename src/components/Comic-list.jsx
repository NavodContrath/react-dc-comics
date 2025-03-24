import Card from "./Card"

export default function ComicList({ comics }) {
    return (
        <>
            <div className="container row" style={{ padding: "3rem 0", position: "relative" }}>
                {
                    comics.map(product => (
                        <div className="col-2">
                            <Card key={`product-${product.id}`} img={product.thumb} title={product.series} />
                        </div>
                    ))
                }
                <button type="button" className="btn" id="series-btn">CURRENT SERIES</button>
            </div>
            <div style={{ textAlign: "center" }}>
                <button type="button" className="btn" style={{ marginBottom: "1rem" }}>LOAD MORE</button>
            </div>
        </>
    )
}