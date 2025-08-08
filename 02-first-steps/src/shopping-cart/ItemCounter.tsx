import { useState } from "react";
import styles from './ItemCounter.module.css'

interface Props{
    name:string;
    quantity?: number;
};

export const ItemCounter = (props : Props) => {
    const [counter, setCounter] = useState(props.quantity ?? 1)

    const handleModifyCounter = (amt:number) => {
        const newAmt = counter + amt;
        if( newAmt < 1)
            return;
        setCounter(newAmt)
    }

  return (
    <section className={styles['item-row']}>
        <span className={styles.itemText} style={{color: counter <= 1 ? 'red' : 'black'}}>{props.name}</span>
        <button onClick={() => handleModifyCounter(1)}>+1</button>
        <span>{counter}</span>
        <button onClick={() => handleModifyCounter(-1)}>-1</button>
    </section>
  )
}
