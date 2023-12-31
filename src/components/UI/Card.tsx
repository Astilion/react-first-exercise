import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card =(props:CardProps) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}
export default Card;