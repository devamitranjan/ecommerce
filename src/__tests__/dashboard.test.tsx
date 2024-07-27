import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { navigateTo } from '../utils/test.utils';
import App from '../App';

describe('Dashboard component', () => {
  it('render the dashboard page', async () => {
    navigateTo(new URL('http://localhost/dashboard'));
    render(<App />);
    expect(screen.getByText(/hello jane/i)).toBeInTheDocument();
    const post = screen.getByText(/create post/i);
    await fireEvent.click(post);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    const usernameInput = screen.getByLabelText(/email or username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    const registerBtn = screen.getByRole('button', { name: /register/i });
    fireEvent.click(registerBtn);
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);
    const loginSubmitButton = screen.getByRole('button', {
      name: /login now/i
    });
    expect(loginSubmitButton).toBeInTheDocument();
    userEvent.type(usernameInput, 'amit@atlys.com');
    fireEvent.click(loginSubmitButton);

    userEvent.type(passwordInput, 'password');
    fireEvent.click(loginSubmitButton);

    expect(screen.getByText(/hello jane/i)).toBeInTheDocument();
  });
});
