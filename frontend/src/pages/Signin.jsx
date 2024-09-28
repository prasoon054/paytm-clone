import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import axios from "axios";
export function Signin(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSignin = async() => {
        try{
            const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {username: username, password: password}
            );
            const tokenResponse = response.data.token;
            const user = jwtDecode(tokenResponse);
            localStorage.setItem("token", "Bearer " + tokenResponse);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");
        }
        catch(error){

            console.log(error.data);
        }
    }
    return  <div className='flex justify-center h-screen bg-slate-300'>
    <div className='flex flex-col justify-center'>
      <div className='p-2 px-4 text-center bg-white rounded-lg w-96 h-max'>
        <Heading label={'Sign in'} />
        <SubHeading label={'Enter your credentials to access your account'} />
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
          <Button label={'Sign in'} onClick={handleSignin} />
        </div>
        <ButtonWarning
          label={"Don't have an account?"}
          buttonText={'Sign up'}
          to={'/signup'}
        />
      </div>
    </div>
  </div>
}