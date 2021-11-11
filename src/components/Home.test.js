import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Home from './Home';

describe('The tests for the Home component', () => {
  it('should properly render the Home', () => {
    render(
      <StaticRouter>
        <Home />
      </StaticRouter>,
    );
    const HomedText = screen.getByText(/Welcome to the Math Magicians Home Page/i);
    expect(HomedText).toBeInTheDocument();
  });

  it('should show the math Girl picture', () => {
    render(
      <StaticRouter>
        <Home />
      </StaticRouter>,
    );
    const mathGirlPicture = screen.getByRole('img');
    expect(mathGirlPicture).toHaveAttribute('alt', 'A girl practicing Math');
    expect(mathGirlPicture).toHaveAttribute('src', 'mathgirl.png');
  });
});
