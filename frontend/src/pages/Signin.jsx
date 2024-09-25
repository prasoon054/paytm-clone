import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
export function Signin(){
    const handleSignin = () => {
        console.log("signin handler called");
    }
    return <div className='flex justify-center h-screen bg-slate-300'>
    <div className='flex flex-col justify-center'>
      <div className='p-2 px-4 text-center bg-white rounded-lg w-96 h-max'>
        <Heading label={'Sign in'} />
        <SubHeading label={'Enter your credentials to access your account'} />
        <InputBox
          onChange={(e) => {
            console.log("Username input changed");
          }}
          placeholder='john@gmail.com'
          label={'Email'}
          type='email'
        />
        <InputBox
          onChange={(e) => {
            console.log("Password input changed");
          }}
          placeholder='123456'
          label={'Password'}
          type='password'
        />
        <div className='pt-4'>
          <Button label={'Sign in'} onClick={handleSignin} />
        </div>
        <ButtonWarning
          label={"Don't have an account?"}
          message={'Sign up'}
          to={'/signup'}
        />
      </div>
    </div>
  </div>
}