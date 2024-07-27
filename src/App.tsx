import React from 'react';

import { DashboardPage } from './page/dashboard';
import { Modal, ModalProvider } from './shared/modal';
import { AppLayout } from './layouts/app-layout';
import { Login } from './components/login';
import { SignUp } from './components/sign-up';

function App() {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

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
  switch (currentPath) {
    case '/login':
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
      <AppLayout showLoginAsset={showLoginAsset}>{screen}</AppLayout>
      <Modal />
    </ModalProvider>
  );
}

export default App;
