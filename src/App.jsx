import React from 'react'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-500'>
        <div className='bg-blue-500 showdow-lg p-4 rounded-md'>
          <div className='text-center py-2 font-bold text-xl text-blue-50'>Password Generator</div>
          <div className='flex items-center'>
          <input type="text" name="" id="" className='rounded-l-md w-full outline-none bg-gray-50 px-2 py-1 font-bold' />
          <button className='bg-gray-900 text-gray-50 rounded-r-md px-2 py-1'>
            copy
          </button>
          </div>
          <div className='font-bold flex items-center space-x-4 py-3'>
            <div className='flex items-center'>
              <input type="range" name="" id="" min={8} max={32} className='' />
              <label htmlFor="range">Length</label>
            </div>
            <div className='flex items-center'>
              <input type="checkbox" name="" id="" className='bg-gray-900 rounded-full'/>
              <label htmlFor="checkbox">Numbers</label>
            </div>
            <div className='flex items-center'>
              <input type="checkbox" name="" id="" className='bg-gray-900 rounded-full'/>
              <label htmlFor="checkbox">Characters</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App