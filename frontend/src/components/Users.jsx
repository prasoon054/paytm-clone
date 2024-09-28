import { Button } from "./Button";

export function Users(){
    const user = JSON.parse(localStorage.getItem("user"));
    const firstName = user.firstName;
    return <div className='flex justify-between'>
    <div className='flex'>
      <div className='rounded-full h-12 w-12 bg-orange-500 flex justify-center mt-1 mr-2'>
        <div className='flex flex-col justify-center h-full text-2l text-white'>
            {firstName[0]}
        </div>
      </div>
      <div className='flex flex-col justify-center h-ful'>
        <div>
            {firstName}
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-center h-ful'>
      <Button onClick={() => {
            console.log("hello");
        }}
        label={'Send Money'}
      />
    </div>
  </div>
}