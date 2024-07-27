import React from 'react';

const DashboardPage = React.lazy(
  () => import('./page/dashboard/dashboard-page')
);
const Login = React.lazy(() => import('./components/login/login'));
const SignUp = React.lazy(() => import('./components/sign-up/sign-up'));
import { Modal, ModalProvider } from './shared/modal';
import { AppLayout } from './layouts/app-layout';

function App() {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );
  console.log(currentPath);

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  let screen = null;
  let showLoginAsset = false;
  switch (currentPath.replace(/\/+$/, '')) {
    case '/login':
    case '':
      screen = <Login />;
      showLoginAsset = true;
      break;
    case '/signup':
      screen = <SignUp />;
      showLoginAsset = true;
      break;
    default:
      screen = <DashboardPage />;
  }

  return (
    <ModalProvider>
      <AppLayout showLoginAsset={showLoginAsset}>
        <React.Suspense fallback={<div>Loading...</div>}>
          {screen}
        </React.Suspense>
      </AppLayout>
      <Modal />
    </ModalProvider>
  );
}

export default App;
