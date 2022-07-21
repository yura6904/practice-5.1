import propTypes from 'prop-types'

function Card(props) {
  return (
    <li className='Card'>
        <div className="card" style={{width: '18rem'}}>
            <img src={props.item.imgLink} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.text}</p>
                <a href={props.item.videoLink} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </li>  
  )
}

Card.propTypes = {
    item: propTypes.object
}

export default Card;
