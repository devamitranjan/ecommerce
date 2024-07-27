import LoginAsset from '../../components/graphics/login-asset';

const AppLayout: React.FC<{
  children: React.ReactNode;
  showLoginAsset?: boolean;
}> = ({ children, showLoginAsset = false }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-black-bg flex-col">
      {showLoginAsset ? (
        <div className="my-10">
          <LoginAsset />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default AppLayout;
