import { useState } from "react";

function ProductForm(){

    const [title, setTital] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event){
        setTital(event.target.value);
        console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
        console.log("Printing");
        console.log(title);
        console.log(date);
    }

    return(
        <form className="flex-col justify-center items-center p-3 text-xl bg-gray-900 text-white font-semibold">
            <div className="m-5 text-2xl p-3 px-5 bg-yellow-700 rounded-xl text-black">
                <label className="m-2 ">Title: </label>
                <input type="text" className="pr-10 p-2 rounded border-solid "
                    placeholder="Enter Your Title: " onChange={titleChangeHandler} ></input>
            </div>

            <div className="m-5 text-2xl p-3 px-5 bg-yellow-700 rounded-xl text-black">
                <label className="m-2">Date: </label>
                <input onChange={dateChangeHandler} type="date" min="2023-01-01" max="2024-01-01" 
                className="pr-10 p-2 rounded border-solid " ></input>
            </div>

            <div>
                <button type="submit"
                className="flex justify-center items-center m-5 p-3 bg-green-700 rounded font-semibold">Add Product</button>
            </div>
            
        </form>
    );

}

export default ProductForm;