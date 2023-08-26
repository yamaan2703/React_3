function Card(props){
    const { id, name, fatherName, field, institute } = props;
    return (
        <div className="card_Seaction">
            <div>
                <p>ID : {id}</p>
                <p>Name : {name}</p>
                <p>Father Name : {fatherName}</p>
                <p>Field : {field}</p>
                <p>Institute : {institute}</p>
            </div>
        </div>
    )
}
export default Card;