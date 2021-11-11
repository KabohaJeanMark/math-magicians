import { render, screen } from '@testing-library/react';
import Routes from './Routes';

describe('Routes renders the NavBar links', () => {
  it('contains a link to the Calculator page', () => {
    render(<Routes />);
    const navLink = screen.getByText(/Calculate/i);
    expect(navLink).toBeInTheDocument();
  });

  it('contains a link to the Quote page', () => {
    render(<Routes />);
    const navLink = screen.getByText(/Quote/i);
    expect(navLink).toBeInTheDocument();
  });
});
