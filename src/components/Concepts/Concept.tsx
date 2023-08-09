import componentsImage from '../../assets/images/components.png';

const Concept = (props) => {
    return (
        <li className="concept">
          <img src={componentsImage} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
    )
}

export default Concept;