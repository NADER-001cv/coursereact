import {useState} from 'react'
import { Input } from '../../layout';
import Stylesform from './userform.module.css'
function UserForm({SaveUserForm,HandleLightbox}) {
/*const [userform, setUserform] = useState({
    name:"",
    age:"",
    adress:"",
    gender:""
})*/

const [name,setName] = useState("")
const [age,setAge] = useState("")
const [adress,setAdress] = useState("")
const [gender,setGender] = useState("")
// const handleUserForm = (e)=> {
//     const name = e.target.name ;
//     const value = e.target.value ;
// setUserform((prevstate) =>({  ...prevstate,[name]:value }))
// }
    const handleSubmitUserForm = (e)=> {   
            e.preventDefault() ;
          //  userform.id= Date.now() ;   
            SaveUserForm({
                id:Date.now(),
                name,
                age,
                adress,
                gender

            }) ;

            setName("")
            setAge("")
            setAdress("")
            setGender("")
            HandleLightbox(false)
// userform.name=""
// userform.age=""
// userform.adress=""
// userform.gender=""
     }
  return (
    <>
    
    <form onSubmit={handleSubmitUserForm}  className={Stylesform.userform}>
   
     
        <div  className={Stylesform.controller}>
        <Input 
        label="name" 
        type="text"
           
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}

        
        />

      
         </div>
        <div  className={Stylesform.controller}>
        <Input 
        label="age" 
        type="text"
           
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}

        
        />

      
         </div>
        <div  className={Stylesform.controller}>
        <Input 
        label="adress" 
        type="text"
           
            name="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}

        
        />

      
         </div>
        <div  className={Stylesform.controller}>
        <Input 
        label="gender" 
        type="text"
           
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}

        
        />

      
         </div>
        <div  className={Stylesform.controller}>
            
            <input type="submit"  value="save" />
        </div>
    
    </form>
    </>
  )
}

export default UserForm



/*
  //     <label>
        //       Name
        //     </label>
        //     <input 
            
        //     type="text"
            
        //     name="name"
        //     value={userform.name}
        //     onChange={handleUserForm}
        //     />
        // </div>
        // <div  className={Stylesform.controller}>
        //     <label>
        //       Age
        //     </label>
        //     <input
        //      type="text"
        //        name="age" 
        //        value={userform.age}
        //        onChange={handleUserForm}
        //        />
        // </div>
        // <div  className={Stylesform.controller}>
        //     <label>
        //       Adress
        //     </label>
        //     <input 
        //     type="text" 
        //      name="adress" 
            
        //     value={userform.adress}
        //     onChange={handleUserForm}
        //     />
        // </div>
        // <div  className={Stylesform.controller}>
        //     <label>
        //       Gender
        //     </label>
        //     <input 
        //     type="text" 
        //      name="gender"
        //      value={userform.gender}
        //      onChange={handleUserForm}
        //      />

*/