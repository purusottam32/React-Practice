  import { useState,useCallback,useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword =useCallback(() => {
    let password = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numset = '0123456789';
    let charset = '!@#$%^&';
    if (numAllowed) {
      str += numset;
    }
    if (charAllowed) {
      str += charset;
    }
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  },[length,numAllowed,charAllowed,setPassword]);
    
  useEffect(() => {
    generatePassword();
  },[length,numAllowed,charAllowed,generatePassword]);

  return (
    <>
     <div className='w-lg mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-gray-200'>
        <h1 className='text-3xl font-bold text-white text-center my-4'>PASSWORD GENERATOR</h1>
        <div className='flex mb-5 overflow-hidden rounded-lg border border-gray-200'>
          <input type="text" value={password} placeholder='password' readOnly className='w-full py-1 px-3' />
          <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={() => { setNumAllowed((prev) => !prev);}}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>  
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
