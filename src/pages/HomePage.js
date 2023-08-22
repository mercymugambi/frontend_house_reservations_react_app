/* eslint-disable */

import React, { useEffect, useState } from "react"

const homePage = () => {

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("data"));
        if (getData) {
            setDataList(getData);
        }
    }, []);

    const [dataList, setDataList] = useState([])

    return (
        <>
        <h1>Home Page</h1>
        <div className="main-container">

        {dataList.map((e, index) => {
            return (
                <div className="HomePage-container" key={index}>
                    <div>
                        {e.image ? (
                            <img className="houseUrl" src={e.image} alt="House" />
                            ) : (
                                "No Image"
                                )}
                    </div>
                    <div className="name-detail">
                    <div>
                    <div>{e && e.houseName}</div>
                    <div className="dots"></div>
                    </div>
                    <br></br>
                    <div >{e && e.Description}</div>
                    </div>
                    {/* <div >{e && e.bedrooms}</div>
                    <div >{e && e.bathrooms}</div>
                    <div >{e && e.rent}</div>
                    <div >{e && e.security}</div>
                    <div >{e && e.city}</div>
                <div >{e && e.phone}</div> */}
                </div>
            )
        })}
        </div>
        </>
    )
}

export default homePage;
