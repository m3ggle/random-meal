import { useState } from 'react';
import styles from './styles'
import Inputs from './utilities/inputs'


function App() {
  const [text, setText] = useState('')

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="flex justify-center items-center h-screen  w-full">
      <div className="bg-slate-800 w-[512px] h-[512px] rounded-xl flex justify-center items-center flex-col gap-y-8 p-6">
        <Inputs />
      </div>
    </div>
  );
}

export default App;
