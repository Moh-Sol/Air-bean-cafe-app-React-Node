import { render, getByTextId } from '@testing-library/react';

import About from './componenets/About/About'

test(' Vårt kaffe ', () => {
  const { container } = render(<About />); 
   const letterValue = getByTextId(container, 'lettervalue');
   expect(letterValue.textContent).toBe("Vårt kaffe");
}); 

 