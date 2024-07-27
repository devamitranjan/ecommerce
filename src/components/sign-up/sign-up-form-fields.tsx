import React from 'react';
import PasswordOpenEye from '../graphics/password-open-eye';
import { simulateSignupApiCall } from './sign-up.api';
import { useModal } from '../../shared/modal';
import { ISignUpFormFieldsProps } from './sign-up.types';
import LoginFormFields from '../login/login-form-fields';
import navigate from '../../utils/navigate';

const SignUpFormFields: React.FC<ISignUpFormFieldsProps> = ({
  isModal = false
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const { openModal, closeModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    simulateSignupApiCall({
      email,
      password,
      username
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm">
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-14px mb-2 font-medium text-custom-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email-address"
            autoComplete="email"
            required
            className="relative block w-full px-3 py-2 border-[1.5px] bg-custom-dark border-custom-gray-border rounded-[1.5px] focus-outline-none focus:z-10 sm:text-16px font-normal text-custom-text placeholder-custom-text placeholder-16px"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-14px mb-2 font-medium text-custom-white"
          >
            Username
          </label>
          <input
            type="text"
            name="email"
            id="username"
            autoComplete="email"
            required
            className="relative block w-full px-3 py-2 border-[1.5px] bg-custom-dark border-custom-gray-border rounded-[1.5px] focus-outline-none focus:z-10 sm:text-16px font-normal text-custom-text placeholder-custom-text placeholder-16px"
            placeholder="Choose a preferred username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-14px mb-2 font-medium text-custom-white"
          >
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 border-[1.5px] bg-custom-dark border-custom-gray-border rounded-[1.5px] focus-outline-none focus:z-10 sm:text-16px font-normal text-custom-text placeholder-custom-text placeholder-16px"
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
              <PasswordOpenEye />
            </span>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-custom-blue border border-transparent rounded-md hover:bg-custom-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue-500"
        >
          Continue
        </button>
      </div>
      <div className="text-sm text-left text-gray-400">
        Already have an account?{' '}
        <div className="inline">
          <button
            className="font-medium hover:underline hover:cursor-pointer transition duration-300 text-custom-white"
            type="button"
            onClick={() => {
              if (isModal) {
                closeModal('SIGNUP_MODAL');
                openModal('LOGIN_MODAL', {
                  heading: 'WELCOME BACK',
                  title: 'Log into your account',
                  children: <LoginFormFields isModal />
                });
              } else {
                navigate('/login');
              }
            }}
          >
            Login -&gt;
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpFormFields;
