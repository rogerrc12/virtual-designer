import React, { useState } from 'react';

import Trailer from './components/Trailer';
import ColorPicker from './components/ColorPicker';
// import SlashStyle from './components/SlashStyle';
import PDFCreation from './components/PDFCreation';

import classes from './App.module.scss';

function App() {
  const [frontColor, setFrontColor] = useState('');
  const [rearColor, setRearColor] = useState('');

  return (
    <main className={classes.MainWrapper}>
      <h1>Virtual Designer</h1>
      <div className='rounded-xl mt-8 w-2/3 m-auto py-10'>
        <Trailer rearColor={rearColor} frontColor={frontColor} />
        <div className='flex items-center justify-between px-20'>
          <ColorPicker label='Rear color' color={rearColor} setColor={setRearColor} />
          <ColorPicker label='Front color' color={frontColor} setColor={setFrontColor} />
        </div>
        <div className='px-20'>
          <h1 className='mt-12'>CREATE YOUR WORKSHEET</h1>
          <hr className='border-dashed my-4' />
          <p>
            Once you've choosen your design, you can put together a worksheet to take to your local dealer to get the trailer you're looking for! Simply select the trailer model
            you're interested in below to see available options for it. Then, select the options you're interested in and print off your selection!
          </p>
        </div>
        <PDFCreation />
      </div>
    </main>
  );
}

export default App;
