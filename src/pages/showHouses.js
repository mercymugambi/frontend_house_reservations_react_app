/* eslint-disable */

import React, { useEffect, useState } from "react";

const HouseList = () => {

    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("data"));
        if (getData) {
            setDataList(getData);
        }
    }, []);

    return (
        <div>
            <h1>My Houses</h1>

            {console.log("before map", dataList)}
            {dataList.map((e, index) => {
                return (
                    <div key={index}>
                        <div>{e && e.houseName}</div>
                        <div >{e && e.Description}</div>
                        <div >{e && e.bedrooms}</div>
                        <div >{e && e.bathrooms}</div>
                        <div >{e && e.rent}</div>
                        <div >{e && e.security}</div>
                        <div >{e && e.city}</div>
                        <div >{e && e.phone}</div>
                        <div>
                            {e.image ? (
                                <img className="houseUrl" src={e.image} alt="House" />
                            ) : (
                                "No Image"
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseList;