import navigate from '../../utils/navigate';
import { ISignUpFormData } from './sign-up.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const simulateSignupApiCall = (_formData: ISignUpFormData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Signup successful!' });
    }, 1000);
  }).then(() => {
    navigate('/login');
  });
};
