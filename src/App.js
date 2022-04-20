import React, {useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import AllPersons from "./components/AllPersons";
import YoungPersons from "./components/YoungPersons";
import MiddleAgedPersons from "./components/MiddleAgedPersons";
import OldAdultPersons from "./components/OldAdultPersons";
import Date from "./components/Date";
import './App.css';



export default () => {
    const [filter, setFilter] = useState("all")

    const [allPersonsVisible, setAllPersonsVisible] = useState(false);
    const [youngPersonsVisible, setYoungPersonsVisible] = useState(false);
    const [middleAgedPersonsVisible, setMiddleAgedPersonsVisible] = useState(false);
    const [oldAdultPersonsVisible, setOldAdultPersonsVisible] = useState(false);

    const countMe = () =>{
        for(let i = 1; i <= 100; i++){
            if(i % 3 === 0){
                console.log('Foo')
            }else if(i % 5 === 0){
                console.log('Bar')
            }else{
                console.log(i)
            }
        }
    };

    useEffect(() => {
        filter === "all" ? setAllPersonsVisible(true) : setAllPersonsVisible(false);
        filter === "young" ? setYoungPersonsVisible(true) : setYoungPersonsVisible(false);
        filter === "middleAged" ? setMiddleAgedPersonsVisible(true) : setMiddleAgedPersonsVisible(false);
        filter === "oldAdult" ? setOldAdultPersonsVisible(true) : setOldAdultPersonsVisible(false);
    }, [filter]);

    useEffect(() => {
        countMe();
    }, [])

    const handleOnChange = (e) => {
        setFilter(e.target.value);
    };
    return(
        <div>
            <Navbar />
            <div className="container">
            <div className="mt-5">
                Filter By Age
            </div>
            <div>
                <select value={filter} onChange={handleOnChange} className="form-select formSize">
                    <option value="all">All</option>
                    <option value="young">20 and below</option>
                    <option value="middleAged">21 to 39</option>
                    <option value="oldAdult">40 and above</option>
                </select>
            </div>
            <hr></hr>
            {allPersonsVisible && <AllPersons />}
            {youngPersonsVisible && <YoungPersons />}
            {middleAgedPersonsVisible && <MiddleAgedPersons />}
            {oldAdultPersonsVisible && <OldAdultPersons />}
            <hr></hr>
            <Date />
            </div>
            
        </div>
    );
}