import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-900">
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-6 py-4 bg-gray-800 text-orange-500 flex flex-col">
            <h1 className='text-white text-center my-3 text-lg sm:text-xl md:text-2xl'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-2 px-3 text-sm sm:text-base md:text-lg"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copyPasswordToClipboard}
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-colors'
                >
                    copy
                </button>
            </div>
            <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-2 text-sm sm:text-base'>
                <div className='flex items-center gap-x-1 sm:gap-x-2'>
                    <input 
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer w-full sm:w-1/2'
                        onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev )
                        }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>
    </div>
)


}

export default App