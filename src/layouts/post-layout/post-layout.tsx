import LoginFormFields from '../../components/login/login-form-fields';
import { useModal } from '../../shared/modal';

interface IPostLayout {
  children: React.ReactNode;
}

const PostLayout: React.FC<IPostLayout> = ({ children }) => {
  const { openModal } = useModal();
  return (
    <div
      className="w-1/2 mb-3"
      onClick={(e) => {
        e.stopPropagation();
        openModal('LOGIN_MODAL', {
          heading: 'WELCOME BACK',
          title: 'Log into your account',
          children: <LoginFormFields isModal />
        });
      }}
    >
      <div className="bg-custom-dark p-5 border-0 border-custom-gray rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default PostLayout;
