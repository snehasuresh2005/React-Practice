import pfp from './assets/Cat Pfp!!.jpg';
import './Card.css';
function Card(){
return(
    <div className="card">
        <img  className="card_image"src={pfp} alt="Cat pic" />
        <h2>Sneha</h2>
         <p>I am a student at PES University</p>
    </div>
)
}
export default Card;