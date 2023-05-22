import{render,screen} from '@testing-library/react';
import About from './about';
import '@testing-library/jest-dom';

describe("About us",()=>{
    test("heading",()=>{
        render(<About/>);
        const headingElement =screen.getByText("About Us")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading two",()=>{
        render(<About/>);
        const headingElement=screen.getByRole('heading',{
            level:3,
            name:'Welcome to MotivityLabs'
        })
        expect(headingElement).toBeInTheDocument()

    });
    test("heading three",()=>{
        render(<About/>);
        const headingElement=screen.getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum sequi delectus necessitatibus harum. Natus, illo voluptate? Quia at odio tempore obcaecati neque accusantium minima, cumque, eum quae perspiciatis eos modi nemo.")
        expect(headingElement).toBeVisible()
    });
     test("heading four",()=>{
        render(<About/>);
        const headingElement=screen.getByText("Lorem ipsum dolor sit amet")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading five",()=>{
        render(<About/>);
        const headingElement=screen.getByText("Consectetur adipisicing elit, sed do")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading six",()=>{
        render(<About/>);
        const headingElement=screen.getByText("Eiusmod tempor incididunt ut labore")
        expect(headingElement).toBeInTheDocument()

    });
})