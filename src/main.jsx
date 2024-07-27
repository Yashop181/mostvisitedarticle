import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './global.css';
import Layout from './components/Layout.jsx';
import router from '../routers/';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Layout>
        <RouterProvider router={router} />
    </Layout>,
);
