import propTypes from 'prop-types'

function CardsList(props) {
    return (
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    )
}

CardsList.propTypes = {
    items: propTypes.array
}

export default CardsList;
  