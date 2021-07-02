// import React from "react";
import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("dubai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f4d606de54692dbe2a0d71c7a4a7bd7d`;

            const response = await fetch(url);

            // console.log(response);

            const resjson = await response.json();

            console.log(resjson.main);

            setcity(resjson.main);
        }
        fetchApi();
    })

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        value={search}
                        className="inputField" onChange={(event) => {
                            setsearch(event.target.value)
                        }} />
                </div>

                {!city ? (<p className="errorMsg">No Data Found</p>)
                    : (<div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>
                            {search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="tempmin_max">
                            Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                        </h3>
                    </div>)
                }

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </>
    )
}

export default Tempapp;