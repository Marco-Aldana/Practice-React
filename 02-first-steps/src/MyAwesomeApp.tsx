import type { CSSProperties } from "react";

export function MyAwesomeApp(){
    const firstName = "Marco";
    const lastName = "Aldana";

    const books = ['vol 1','vol 2','special edition']

    const myStyles:CSSProperties = {
        backgroundColor: "blue",
        color: "white",
        borderRadius:'5px',
    };

    return (
        <>
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>
        <p>{`2 + 2 is: ${2+2}`}</p>
        <p
        style={myStyles}
        >{firstName === 'Marco' ? 'is Marco': 'is not Marco'}</p>
        <p 
        style={{backgroundColor:"red",
            borderRadius: '5px',
        }}
        >{books.join(', ')}</p>

        </>
    )
}