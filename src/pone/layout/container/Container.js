

import styles from './container.module.css'


function Container({children,size,custemstyle}) {
    const {fixed,large,smal} = styles
  return (
    <div className={`${fixed} ${size ? large:smal}`} style={{...custemstyle }}>


  

 {children}



    
    </div>
  )
}

export default Container