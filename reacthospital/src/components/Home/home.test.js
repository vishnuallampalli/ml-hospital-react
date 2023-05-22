import { render, screen } from '@testing-library/react';
import HomePage from './home';
import '@testing-library/jest-dom';

describe("home page test",()=>{
  test('renders learn react link', () => {
    render(<HomePage />);
    const linkElement = screen.getByRole('heading',{
      level:1,
      name: 'Online Consultation Scheduler'
    });
    expect(linkElement).toBeInTheDocument();
  });
  test('heading', () => {
    render(<HomePage />);
    const linkElement = screen.getByRole('heading',{
      level:2,
      name: "Use our service:"
    });
    expect(linkElement).toBeInTheDocument();
  });
  test('heading two', () => {
    render(<HomePage />);
    const linkElement = screen.getByText("To book an appointment with a doctor");
    expect(linkElement).toBeInTheDocument();
  });
  test('heading three', () => {
    render(<HomePage />);
    const linkElement = screen.getByText("When your in emergency and you need immediate attention");
    expect(linkElement).toBeInTheDocument();
  });
  test('heading four', () => {
    render(<HomePage />);
    const linkElement = screen.getByText("Avoid the emergency room for routine emergencies");
    expect(linkElement).toBeInTheDocument();
  });
  test('heading five', () => {
    render(<HomePage />);
    const linkElement = screen.getByText("Contact Us");
    expect(linkElement).toBeInTheDocument();
  });
  test('heading six', () => {
    render(<HomePage />);
    const linkElement = screen.getByText("How it works");
    expect(linkElement).toBeInTheDocument();
  });
})