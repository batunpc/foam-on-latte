import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from '../src/App';

describe('App', () => {
  it('renders a Hello World', () => {
    // Arrange
    render(<WrappedApp />);
    // Act
    const helloWorld = screen.getByText('Hello World');
    // Assert
    expect(screen.getByRole('heading', { level: 1 })).toBe(helloWorld);
  });
  it("renders a 'Not Found' page with link to home", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    // Act
    const notFound = screen.getByText('Not Found');
    const link = screen.getByRole('link', { name: 'Go home' });
    // Assert
    expect(screen.getByRole('heading', { level: 1 })).toBe(notFound);
    expect(link).toHaveAttribute('href', '/');
  });
});
