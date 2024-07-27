import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { navigateTo } from '../utils/test.utils';
import App from '../App';

describe('Signup Component', () => {
  it('render the signup form from signup page', async () => {
    navigateTo(new URL('http://localhost/signup'));
    render(<App />);
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    const emailInput = screen.getByLabelText(/email/i);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const continueBtn = screen.getByRole('button', {
      name: /continue/i
    });

    userEvent.type(emailInput, 'amit@atlys.com');
    userEvent.type(usernameInput, 'amit.ranjan');
    userEvent.type(passwordInput, 'password');
    fireEvent.click(continueBtn);

    screen.findByText(/log into your account/i);
  });
});
