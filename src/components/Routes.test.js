import { render, screen } from '@testing-library/react';
import Routes from './Routes';

describe('Routes renders all the 3 NavBar links', () => {
  render(<Routes />);

  it('contains a link to the Calculator page', () => {
    const navLink = screen.getByText(/Calculate/i);
    expect(navLink).toBeInTheDocument();
  });
});
