import{render,screen} from '@testing-library/react';
import DoctorHelp from './index'
import '@testing-library/jest-dom';

describe("About us",()=>{
    test("heading one",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("How can we help?")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading two",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("Describe the problem you're having")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading three",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("Give us the details")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading four",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("Your Name")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading five",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("Your Email")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading six",()=>{
        render(<DoctorHelp/>);
        const headingElement =screen.getByText("Submit")
        expect(headingElement).toBeInTheDocument()
    });

})