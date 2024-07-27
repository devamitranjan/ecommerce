import { Card } from '../card';
import SignUpFormFields from './sign-up-form-fields';

const SignUp: React.FC = () => {
  return (
    <Card heading="SIGN UP" title="Create an account to continue">
      <SignUpFormFields />
    </Card>
  );
};

export default SignUp;
