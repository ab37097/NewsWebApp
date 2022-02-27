import './card.css'
const Card = (props) => (
    <div>
        <a href={props.url} target="_blank">
            <div className='card'>
                <div className='card-img-container'>
                    <img className='card-img' src={props.img}/>
                </div>
                <div className='card-content'>
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
        </a>
    </div>
);

export default Card;