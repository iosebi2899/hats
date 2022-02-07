import { initializeApp } from "firebase/app";
import { getDatabase, ref , push, onValue} from 'firebase/database'
import { getStorage, ref as stRef ,uploadBytes, getDownloadURL} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUF40poIrrHLQ1hqKfhODoXNiuzuWKsJo",
  authDomain: "hats-ge.firebaseapp.com",
  databaseURL: "https://hats-ge-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hats-ge",
  storageBucket: "hats-ge.appspot.com",
  messagingSenderId: "910868840233",
  appId: "1:910868840233:web:c1ab7a680567384cb18138",
  measurementId: "G-G4VWDQXG9R"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);


export const uploadItem = async(input) =>{

    const { image, data, dbPath } = input

    const storageRef = stRef(storage, image.name);
    if(image){
    const uploadedItem = await uploadBytes(storageRef, image).then(item => {
      return getDownloadURL(storageRef)
    })

    data.link = uploadedItem ? uploadedItem : ''

    await push(ref(db, "Hats"), data);
    }
}

export const fetchData = async() =>{
  
  let items = []
  await onValue(ref(db, "Hats"), (snapshot)=>{
    const hats = snapshot.val()
    Object.values(hats).forEach(hat => items.push(hat))
  })

  return items
}