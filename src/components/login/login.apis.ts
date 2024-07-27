import navigate from '../../utils/navigate';
import { IFormData } from './login.types';

export const simulateLoginApiCall = (formData: IFormData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        formData.email === 'amit@atlys.com' &&
        formData.password === 'password'
      ) {
        resolve({ message: 'Login successful!' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }).then((res: any) => {
    if (res?.message === 'Login successful!') {
      navigate('/dashboard');
    }
  });
};
