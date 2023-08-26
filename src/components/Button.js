function Button(props) {
    return (
        <div className="btn_Section">
            <button className="search_btn" buttonClick={props.buttonClick}>{props.buttonValue}</button>
        </div>
    )
}

export default Button;