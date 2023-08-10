import Card from '../UI/Card'

export interface ConceptProps {
  image: string;
  title: string;
  description: string;
}

const Concept = (props:ConceptProps) => {
    return (
        <Card className="concept">
          <img src={props.image} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </Card>
    )
}

export default Concept;