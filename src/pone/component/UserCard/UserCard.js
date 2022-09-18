import styleCard from './usercard.module.css'
import { useState } from 'react';
import { Container,Input } from '../../layout';

function UserCard({ name, age,HandleLightbox, ...props  }) {
    const [showForm,setShowForm] = useState(false)
    const HandleBtn = (idx) => {
props.DeleteHandle(idx)
console.log("idx","props",idx,props);
    }


    const HandleShowFormCard =()=>{
       setShowForm(HandleLightbox(!showForm))
       console.log("HandleShowFormCard called list")
    }
  return (
    <>


      <div className={styleCard.card} >
        <ul>
          <li>
            {name}
          </li>
          <spam>
          {age}
          </spam>
        </ul>
        <ul>
          <li>
            {props.adress}
          </li>
          <spam>
          {props.gender}
          </spam>
        </ul>
        <div className={styleCard.btn}>

        <button onClick={HandleShowFormCard} >
        o
       </button>
        <button  onClick={() => HandleBtn(props.id)} >
         x
        </button>
       
      </div>
      </div>
    
    </>
  );
}

export default UserCard;
