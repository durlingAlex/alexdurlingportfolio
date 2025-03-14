import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

test('renders home page link', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
);
  const linkElement = screen.getByText(/Welcome to my page/i);
  expect(linkElement).toBeInTheDocument();
});
