import { Button } from "./Button";
export function Appbar(){
    const handleLogout = () => {
        console.log("Logout handler called");
    }
    return (
        <div className='flex items-center justify-between px-4 shadow h-14'>
        <div>
            <h1 className='text-3xl font-bold'>PayTM</h1>
        </div>
        <div className='flex items-center justify-around gap-2'>
            <h1>
            Hello, <span className='font-bold'>Prasoon</span>{' '}
            </h1>
            <div className='mr-4'>
            <Button label='Logout' onClick={handleLogout} />
            </div>
        </div>
        </div>
    );
}