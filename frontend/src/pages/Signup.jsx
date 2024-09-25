import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
export function Signup(){
    const handleSignup = () => {
        console.log("Signup handler called");
    }
    return <div className='flex justify-center h-screen bg-slate-300'>
    <div className='flex flex-col justify-center'>
        <div className='p-2 px-4 text-center bg-white rounded-lg w-96 h-max'>
            <Heading label={'Sign up'} />
            <SubHeading label={'Enter your details to create an account'} />
            <InputBox
            onChange={(e) => {
                setFirstName(e.target.value);
            }}
            placeholder='John'
            label={'First Name'}
            />
            <InputBox
            onChange={(e) => {
                setLastName(e.target.value);
            }}
            placeholder='Doe'
            label={'Last Name'}
            />
            <InputBox
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            placeholder='john@gmail.com'
            label={'Email'}
            type='email'
            />
            <InputBox
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            placeholder='123456'
            label={'Password'}
            type='password'
            />
            <div className='pt-4'>
            <Button onClick={handleSignup} label={'Sign up'} />
            </div>
            <ButtonWarning
            label={'Already have an account?'}
            message={'Sign in'}
            to={'/signin'}
            />
        </div>
    </div>
    </div>
}