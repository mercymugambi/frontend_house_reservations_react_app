/* eslint-disable */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../redux/house/HousesSlice";

const AddHouse = () => {
    const dispatch = useDispatch()
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("data"));
        if (getData) {
            console.log("Data fetched from localStorage:", getData);
            setDataList(getData);
        }
    }, []);
    
    const HouseSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)

        const imageFile = formData.get('image');
        const setImage = imageFile ? await convertToBase64(imageFile) : null;
        
        const setData = {
            houseName: formData.get('houseName'),
            dataListescription: formData.get('Description'),
            bedrooms: Number(formData.get('bedrooms')),
            bathrooms: Number(formData.get('bathrooms')),
            rent: Number(formData.get('rent')),
            security: formData.get('security'),
            city: formData.get('city'),
            icon: setImage,
           contact_phone_number: Number(formData.get('phone'))
        }
        console.log("setdata :",setData);
        
        const updatedDataList = [...dataList, setData];
        setDataList(updatedDataList);

        try {
            localStorage.setItem('data', JSON.stringify(updatedDataList));
            await dispatch(fetchApi({ setData: setData }));
            console.log("localstorage" , updatedDataList);
        } catch (error) {
            console.error("Error while updating data:", error);
        }
        await dispatch(fetchApi(setData));
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };
    
    return (
        <>
            <section className="AddHouse-container">
                <h1>Create Home</h1>
                <form onSubmit={HouseSubmit}>
                    <input type="text" name="houseName" placeholder="House Name" />
                    <input type="text" name="description" placeholder="Description" />
                    <input type="number" name="bedrooms" placeholder="Number of Bedrooms" />
                    <input type="number" name="bathrooms" placeholder="Number of Bathrooms" />
                    <input type="number" name="rent" placeholder="Monthly Rent" />
                    <input type="text" name="security" placeholder="Security Deposit" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="number" name="contact_phone_number" placeholder="Contact Phone Number" />
                    <input type="file" name="icon" accept="image/*" placeholder="Image URL" />
                    <button type="submit">Submit</button>
                </form>
            </section>

        </>
    );
}

export default AddHouse;