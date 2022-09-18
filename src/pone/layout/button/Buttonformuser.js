import { useState } from 'react'
import stylesButton from './buttonuserform.module.css'

function Buttonformuser({HandleLightbox}) {

    const [closeBtn,setCloseBtn] = useState(false)

    const HandleUserFormBtn = () => {
        HandleLightbox()

    }
  return (
    <div  className={stylesButton.btnclose}>
    <button  onClick={HandleUserFormBtn}  >x</button>
    </div>
  
  )
}

export default Buttonformuser