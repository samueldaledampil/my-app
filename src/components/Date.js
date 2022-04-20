import React, {useState} from "react";
import '../App.css';

const Date = () => {

    const [date, setDate] = useState();

    const showDate = () => {
        if(date){
            alert(date)
        }else{
            alert('Enter date')
        } 
    }
    return(
        <div className="formDiv mt-3 mb-5">
            <input className="formSize form-control" type="date" onInput={e => setDate(e.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-danger mx-3" onClick={showDate}>CONVERT</button>
            </div>
        </div>
    );
    
};

export default Date;