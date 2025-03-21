export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-head">
                    <img src={props.img} alt="" />
                </div>
                <div className="card-body">
                    {props.title}
                </div>
            </div>
        </>
    )
}