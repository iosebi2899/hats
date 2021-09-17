import React, {useState} from "react"
import axios from 'axios';

const AddItem = () => {
    const [input, setInput] = useState({
        title:"",
        description:"",
        price:"",
    })


    const handleChange = (event)=>{

        const {name, value} = event.target;

        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value,
            }

        })
    }

    const handleClick = (event)=>{
        event.preventDefault();
        const newItem = {
            title: input.title,
            description:input.description,
            price:input.price
        }
        axios.post('http://localhost:3001/addItems',newItem)
    }


    return (
        <div>
            <h2>პროდუქტის დამატება</h2>
            <hr />
            <form>
                <label>პროდუქტის სახელი</label>
                <input onChange={handleChange} name="title" value={input.title} type="text" placeholder="ჩაწერე სახელი" />
                <br />
                <br />
                <label>პროდუქტის აღწერა</label>
                <input onChange={handleChange} name="description" value={input.description} type="text" placeholder="ჩაწერე აღწერა"/>
                <br />
                <br />
                <label>ფასი</label>
                <input onChange={handleChange} name="price" value={input.price} type="number" min="0" placeholder="ჩაწერე ფასი"/>

                <input onClick={handleClick} type="submit" />
            </form>
        </div>
    )
}

export default AddItem;
