

import About from './About'

import { render, getByTestId, fireEvent ,getByText,screen } from '@testing-library/react';



// it('h1 visar Vårt kaffe ', () => {
//     const { container } = render(<About />);

//     const h1Value = getByTestId(container, 'h1-cafe')

//     expect(h1Value.textContent).toBe('Vårt kaffe')

// });



test ('right text' , () => {​​​​
    const rendered = render(<About />)
    expect(rendered.getByText('Vårt kaffe'));
    
    }​​​​)