import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { navigateTo } from '../utils/test.utils';
import App from '../App';

describe('Login Page', () => {
  it('render the login form from login page', async () => {
    navigateTo(new URL('http://localhost/login'));
    render(<App />);

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    const usernameInput = screen.getByLabelText(/email or username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginSubmitButton = screen.getByRole('button', {
      name: /login now/i
    });
    userEvent.type(usernameInput, 'amit@atlys.com');
    fireEvent.click(loginSubmitButton);

    userEvent.type(passwordInput, 'password');
    fireEvent.click(loginSubmitButton);

    screen.findByText(/hello jane/i);
  });
});
