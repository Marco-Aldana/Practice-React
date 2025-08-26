import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render, screen} from '@testing-library/react'

describe('MyAwesomeApp', ()=>{
    test('should render firstName and lastName', () =>{
console.log(document.body)

        const {container} = render(<MyAwesomeApp/>);

        // console.log(container.innerHTML);
        screen.debug()
    })
})