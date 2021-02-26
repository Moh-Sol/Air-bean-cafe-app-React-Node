import { render, getByTextId } from '@testing-library/react';
/* import App from './App'; */
/* import Landing from './componenets/Landing/Landing' */
import About from './componenets/About/About'

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('om text Vart kaffe finns', () => {
  let { container } = render(<About />); 
   let letterValue = getByTextId(container, 'lettervalue');
   expect(letterValue.textContent).tobe('Vårt kaffe');
});