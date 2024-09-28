import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
export function Appbar(){
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/Signin");
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const firstName = user.firstName;
    return (
        <div className='flex items-center justify-between px-4 shadow h-14'>
        <div>
            <h1 className='text-3xl font-bold'>PayTM</h1>
        </div>
        <div className='flex items-center justify-around gap-2'>
            <h1>
            Hello, <span className='font-bold'>{firstName}</span>{' '}
            </h1>
            <div className='mr-4'>
            <Button label='Logout' onClick={handleLogout} />
            </div>
        </div>
        </div>
    );
}