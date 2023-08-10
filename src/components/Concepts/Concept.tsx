export interface ConceptProps {
  image: string;
  title: string;
  description: string;
}

const Concept = (props:ConceptProps) => {
    return (
        <li className="concept">
          <img src={props.image} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
    )
}

export default Concept;