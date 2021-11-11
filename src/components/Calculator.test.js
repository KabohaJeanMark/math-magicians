import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Calculator from './Calculator';

describe('The tests for the Calculator component', () => {
  it('should properly render the Calculator', () => {
    render(
      <StaticRouter>
        <Calculator />
      </StaticRouter>,
    );
    const CalculatorText = screen.getByText(/Let Us do some Math/i);
    expect(CalculatorText).toBeInTheDocument();
  });
});
