// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

 afterEach(cleanup)
 
 test('should generate a snapshot for app component', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })
