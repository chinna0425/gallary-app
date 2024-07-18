import './index.css'

const Thumbnailitems = props => {
  const {eachsets, changeimageitem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText, isstatus} = eachsets
  console.log(isstatus)
  const imageitem = () => {
    changeimageitem(id)
  }
  const addon = isActive ? 'imagesetting1' : 'imagesetting'
  console.log(addon)
  return (
    <li>
      <button type="button" className="button" onClick={imageitem}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={addon} />
      </button>
    </li>
  )
}
export default Thumbnailitems
