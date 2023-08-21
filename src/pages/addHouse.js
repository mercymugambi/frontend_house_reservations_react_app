/* eslint-disable */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../redux/house/HousesSlice";

const AddHouse = (e) => {
    const dispatch = useDispatch()
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("data"));
        if (getData) {
            setDataList(getData);
        }
    }, []);
    
    const HouseSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        
        const setData = {
            houseName: formData.get('houseName'),
            Description: formData.get('Description'),
            bedrooms: Number(formData.get('bedrooms')),
            bathrooms: Number(formData.get('bathrooms')),
            rent: Number(formData.get('rent')),
            security: formData.get('security'),
            city: formData.get('city'),
            image: formData.get('image'),
            phone: Number(formData.get('phone'))
        }
        console.log("setdata :",setData);
        
        setDataList([...dataList, setData])
        dispatch(fetchApi({setData}))
    }
    
    return (
        <>
            <section className="AddHouse-container">
                <h1>Create Home</h1>
                <form onSubmit={HouseSubmit}>
                    <input type="text" name="houseName" placeholder="House Name" />
                    <input type="text" name="Description" placeholder="Description" />
                    <input type="number" name="bedrooms" placeholder="Number of Bedrooms" />
                    <input type="number" name="bathrooms" placeholder="Number of Bathrooms" />
                    <input type="number" name="rent" placeholder="Monthly Rent" />
                    <input type="text" name="security" placeholder="Security Deposit" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="number" name="phone" placeholder="Contact Phone Number" />
                    <input type="file" name="image" accept="image/*" placeholder="Image URL" />
                    <button type="submit">Submit</button>
                </form>
            </section>

            <div>
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
                            <div >
                                {e && e.image instanceof File ? (
                                    <img className="houseUrl" src={URL.createObjectURL(e.image)} alt="House" />
                                ) : (
                                    "No Image"
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default AddHouse;