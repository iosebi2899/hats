import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { uploadItem, fetchData } from '../firebase/index'

const AddItem = () => {
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(true)
    const [modal, setModal] = useState(false)

    const handleModal = () =>{ setModal(!modal)}
    let hats = []
    fetchData().then(result => hats = result)
    useEffect(() =>{
        const password = prompt("ვინ ნახულობს ?")
        if(password === "degenerato1."){
            setLoggedIn(true)
            return
        }else{
            history.push("/")
        }

    },[])

    useEffect(()=>{ console.log(hats)}, [hats])

    const [image, setImage] = useState(null)

    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
          reader.onload = () => {
            if (reader.readyState === 2) {
              setImage(file);
            }
          };
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setImage(null);
        }
      };


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

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(input.title !== "" && input.price !== "" && input.description !== "" && image){
            const uploadInput = {data: input, dbPath: input.title, image}
            
            uploadItem(uploadInput)
            setInput({title:"", description:"", price:""})
        }
    }

    return (
        <div className="adminka">
            {hats.map((hat)=>{
                return (
                    <li>{hat.description}</li>
                )
            })}
            <div className="plus" onClick={handleModal}>+</div>
            <div style={{display: modal ? "flex" : "none"}} className="addItem">
                <h2>პროდუქტის დამატება</h2>
                <hr />
                <form onSubmit={handleSubmit} className={`addItem-form ${modal && "form-modal"}`}>
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
                    <br />
                    <br />
                    <input type="file" accept="image/x-png,image/jpeg" onChange={(e) => {onImageChange(e); }}/>
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>    
    )
}

export default AddItem;
