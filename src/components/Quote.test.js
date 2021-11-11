import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Quote from './Quote';

describe('The tests for the Quote component', () => {
  it('should contain the quote', () => {
    render(
      <StaticRouter>
        <Quote />
      </StaticRouter>,
    );
    const quotedText = screen.getByText(/Everybody is a genius/i);
    expect(quotedText).toBeInTheDocument();
  });
});
