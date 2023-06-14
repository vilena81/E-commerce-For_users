import './newsletter.css'
import SendIcon from '@mui/icons-material/Send';

const Newsleter = () => {
  return (
    <div className='container-new'>
        <div className="title-new" style={{color:"rgb(96, 94, 94)"}}>Newsletter</div>
        <div className="desc-new" style={{color:"rgb(96, 94, 94)"}}>Get timely updates from your favorite products.</div>
        <div className="inputContainer">
            <input className="inputEm" placeholder='Your email' />
            <button className="send">< SendIcon /> </button>
        </div>
    </div>
  )
}

export default Newsleter