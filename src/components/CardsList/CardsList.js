
function CardsList(props) {
    return (
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    )
  }
  
  export default CardsList;
  