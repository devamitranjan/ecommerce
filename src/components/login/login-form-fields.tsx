import React from 'react';

import PasswordOpenEye from '../graphics/password-open-eye';
import { simulateLoginApiCall } from './login.apis';
import { ILoginFormFieldsProps } from './login.types';
import { useModal } from '../../shared/modal';
import SignUpFormFields from '../sign-up/sign-up-form-fields';
import navigate from '../../utils/navigate';

const LoginFormFields: React.FC<ILoginFormFieldsProps> = ({
  isModal = false
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { openModal, closeModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    simulateLoginApiCall({
      email,
      password
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-14px mb-2 font-medium text-custom-white"
          >
            Email or Username
          </label>
          <input
            type="email"
            name="email"
            id="email-address"
            autoComplete="email"
            required
            className="relative block w-full px-3 py-2 border-[1.5px] bg-custom-dark border-custom-gray-border rounded-[1.5px] focus-outline-none focus:z-10 sm:text-16px font-normal text-custom-text placeholder-custom-text placeholder-16px"
            placeholder="Enter your email and username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="flex justify-between mb-2 font-medium text-custom-white text-14px">
            <label htmlFor="password" className="block ">
              Password
            </label>

            <button
              className="font-medium hover:underline hover:cursor-pointer transition duration-300"
              type="button"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 border-[1.5px] bg-custom-dark border-custom-gray-border rounded-[1.5px] focus-outline-none focus:z-10 sm:text-16px font-normal text-custom-text placeholder-custom-text placeholder-16px"
              placeholder="Enter your password"
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
          Login now
        </button>
      </div>
      <div className="text-sm text-left text-gray-400">
        Not registered yet?{' '}
        <button
          className="font-medium hover:underline hover:cursor-pointer transition duration-300 text-custom-white"
          type="button"
          onClick={() => {
            if (isModal) {
              closeModal('LOGIN_MODAL');
              openModal('SIGNUP_MODAL', {
                heading: 'SIGN UP',
                title: 'Create an account to continue',
                children: <SignUpFormFields isModal />
              });
            } else {
              navigate('/signup');
            }
          }}
        >
          Register -&gt;
        </button>
      </div>
    </form>
  );
};

export default LoginFormFields;
