import { render, screen } from '@testing-library/react';
import Routes from './Routes';

describe('Routes renders the NavBar links', () => {
  it('contains a link with right rote for the Calculator page', () => {
    render(<Routes />);
    const navLink = screen.getByText(/Calculate/i);
    expect(navLink).toBeInTheDocument();
  });

  it('contains a link with route path for Quote page', () => {
    render(<Routes />);
    const navLink = screen.getByText(/Quote/i);
    expect(navLink).toBeInTheDocument();
  });
});
