import { Button } from "./Button";

export function Users(){
    return <div className='flex justify-between'>
    <div className='flex'>
      <div className='rounded-full h-12 w-12 bg-orange-500 flex justify-center mt-1 mr-2'>
        <div className='flex flex-col justify-center h-full text-2l text-white'>
            P
        </div>
      </div>
      <div className='flex flex-col justify-center h-ful'>
        <div>
          Prasoon Kumar
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