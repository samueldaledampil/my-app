import React, {useState,useEffect} from "react";
import axios from "axios";
import '../App.css';
import userphoto from '../assets/userphoto.png';


const YoungPersons = () => {
    
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const {data} = await axios.get('http://www.mocky.io/v2/5d73bf3d3300003733081869')
        setPersons(data)
    };

    return(
        <div className="container">
            <div className="row">
            {persons.filter(person => (person.age <= 20))
                .map((person) => {
                    return(
                        <div key={person.id} className="col-xs-4 col-sm-12 col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-3 px-4 py-4">
                                        <img src={userphoto} alt="User Photo"></img>
                                    </div>
                                    <div className="col-9 py-3">
                                        <div className="card-body">
                                            <ul>
                                                <li className="person-name mb-3">{person.name}</li>
                                                <li className="person-info">Email: <strong>{person.email}</strong></li>
                                                <li className="person-info">Mobile: <strong>{person.phone}</strong></li>
                                                <li className="person-info">Company: <strong>{person.company}</strong></li>
                                                <li className="person-info">Address: <strong>{person.address.street}</strong></li>
                                                <li className="person-info">Website: <strong>{person.website}</strong></li>
                                                <li className="person-info">Age: <strong>{person.age}</strong></li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default YoungPersons;