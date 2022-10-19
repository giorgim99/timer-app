import React, { useState } from 'react'

function SettingsPopUp(props) {

  const [ theme, setTheme ] = useState(['dark', 'light'])


  return (
    <div class=' flex text-center justify-center '>
        <h1 class='text-center text-white bg-[#151932] w-1/5 rounded-full p-2 '>
          <h1>Choose The Desired Theme</h1>
          <button className='mr-[30px] '>Dark</button>
          <button>Light</button>
        </h1>
    </div>
  )
}

export default SettingsPopUp