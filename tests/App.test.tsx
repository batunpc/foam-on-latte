import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders a Hello World', () => {
    // Arrange
    render(<App />);
    // Act
    const helloWorld = screen.getByText('Hello World');
    // Assert
    expect(screen.getByRole('heading', { level: 1 })).toBe(helloWorld);
  });
});
