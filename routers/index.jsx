import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App.jsx';
import Home from '../src/pages/Home.jsx';
import PageViews from '../src/components/PageViews/PageViews.jsx';
import Africa from '../src/pages/Africa.jsx';
import NotFound from '../src/pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/permanent/:id',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/page-views',
    element: <PageViews />,
  },
  {
    path: '/top-africa',
    element: <Africa />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
