import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function AuthRoute() {
    const token = cookies.get('TOKEN');
    if (!token) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}