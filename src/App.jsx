import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    //logic
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*()_+"

    
    for (let index = 1; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])


  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  const copy = () => {
    window.navigator.clipboard.writeText(password)
    setCopied(true); // Set copied to true when clicked
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
        <div className='bg-blue-500 showdow-lg p-4 rounded-md'>
          <div className='text-center py-2 font-bold text-xl text-blue-50'>Password Generator</div>
          <div className='flex items-center'>
            <input
              type="text"
              value={password}
              name=""
              id=""
              className='rounded-l-md w-full outline-none bg-gray-50 px-2 py-1 font-bold'
              readOnly
            />
          <button
            onClick={copy}
            className='bg-gray-900 text-gray-50 rounded-r-md px-2 py-1 font-bold'>
             { copied ? "copied" : "copy"}
            </button>
          </div>
          <div className='font-bold flex items-center space-x-4 py-3 px-4'>
            <div className='flex items-center'>
              <input
                type="range"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                name=""
                id=""
                min={8}
                max={32}
                className='' />
                <label htmlFor="range">Length {length}</label>
            </div>
            <div className='flex items-center'>
                <input
                  type="checkbox"
                  value={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev)
                  }}
                  name=""
                  id=""
                  className='bg-gray-900 rounded-full' />
                <label htmlFor="checkbox">Numbers</label>
            </div>
            <div className='flex items-center'>
                <input
                  type="checkbox"
                  value={charAllowed}
                  onChange={() => {
                        setCharAllowed((prev) => !prev)
                      }}
                  name=""
                  id=""
                  className='bg-gray-900 rounded-full'
                />
                <label htmlFor="checkbox">Characters</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
