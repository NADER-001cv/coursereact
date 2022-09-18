import styleLightbox from './lightbox.module.css'

function Lightbox({children}) {
  return (
    <div className={styleLightbox.lightbox}>{children}</div>
  )
}

export default Lightbox