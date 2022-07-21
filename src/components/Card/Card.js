
function Card(props) {
  return (
    <li className='Card'>
        <div className="card" style={{width: '18rem'}}>
            <img src={props.item.imgLink} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.text}</p>
                <a href="https://www.youtube.com/watch?v=s0JHDfEk_7c" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </li>
        
  )
}

export default Card;
