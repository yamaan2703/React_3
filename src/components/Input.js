function Input (props) {
    return(
        <>
        <div className="inp_section" >
            <input placeholder="Enter Model" onChange={(e)=>props.onChange(e)} id="name" type="value" className="input_Model"></input>
        </div>
            <div className="select_section">
        
            <select className="sec3_dropdown" onChange={(e)=>props.onChange(e)} id="department" name="fruits">
                <option>Select Department</option>
                <option value="
                CS / SE">CS / SE</option>
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Diploma">Diploma</option>
            </select>
                </div>
                <div className="btn_Section">
            <button className="search_btn" onClick={()=>{props.buttonClick()}}>Search</button>
        </div>
        </>
        
    ) 
}

export default Input;