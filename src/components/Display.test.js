import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('The Display component', () => {
  it('should have a default value of 0', () => {
    render(<Display />);
    const DisplayedText = screen.getByText(/0/i);
    expect(DisplayedText).toBeInTheDocument();
  });
});
