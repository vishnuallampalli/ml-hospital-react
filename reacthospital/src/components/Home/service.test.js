import{render,screen} from '@testing-library/react';
import Services from './services';
import '@testing-library/jest-dom'

describe("servicing",()=>{
    test("heading one",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Services")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading two",()=>{
        render(<Services/>);
        const headingElement=screen.getByRole('heading',{
            level:4,
            name:'Cardiology'
          
        })
        expect(headingElement).toBeInTheDocument()
        
    });
    test("heading three",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Heart")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading four",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Oncology")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading five",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Cancer")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading six",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Nephrology")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading seven",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Kidneys")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading eight",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Orthopaedics")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading nine",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Muscles")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading ten",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Neurology")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading eleven",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Nerves")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading twelve",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Gastroenterology")
        expect(headingElement).toBeInTheDocument()
    });
    test("heading thirteen",()=>{
        render(<Services/>);
        const headingElement=screen.getByText("Digestive System")
        expect(headingElement).toBeInTheDocument()
    });



    
})