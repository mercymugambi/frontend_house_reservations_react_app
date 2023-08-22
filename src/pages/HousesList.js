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

            {dataList.map((e, index) => {
                return (
                    <div className="house-list-container" key={index}>
                        <div>
                            {e.image ? (
                                <img className="houseUrl" src={e.image} alt="House" />
                            ) : (
                                "No Image"
                            )}
                        </div>
                        <div>{e && e.houseName}</div>
                        <div >{e && e.phone}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default HouseList;