import { Card } from '../card';
import LoginFormFields from './login-form-fields';

const Login: React.FC = () => {
  return (
    <Card heading="WELCOME BACK" title="Log into your account">
      <LoginFormFields />
    </Card>
  );
};

export default Login;
