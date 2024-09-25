export function SendMoney(){
    const handleTransfer = () => {
        console.log("transfer initiated");
    }

    return <div className='flex justify-center h-screen bg-gray-100'>
    <div className='flex flex-col justify-center h-full'>
      <div className='max-w-md p-4 space-y-8 bg-white border rounded-lg shadow-lg h-min text-card-foreground w-96'>
        <div className='flex flex-col space-y-1.5 p-6'>
          <h2 className='text-3xl font-bold text-center'>Send Money</h2>
        </div>
        <div className='p-6'>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full'>
              <span className='text-2xl text-white'>
                P
              </span>
            </div>
            <h3 className='text-2xl font-semibold'>Prasoon</h3>
          </div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='amount'
              >
                Amount (in Rs)
              </label>
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type='number'
                className='flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background'
                id='amount'
                placeholder='Enter amount'
              />
            </div>
            <button
              onClick={handleTransfer}
              className='justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-green-500 rounded-md ring-offset-background'
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}