import React, { useEffect, useState } from 'react';

import Trailer from './components/Trailer';
import ColorPicker from './components/ColorPicker';
import imgs from './images';
import NavItems from './components/navigation/NavItems';
import { cacheImages } from './cacheImages';

import Spinner from './components/Spinner';

import classes from './App.module.scss';

function App() {
  const [frontColor, setFrontColor] = useState('gloss-white');
  const [rearColor, setRearColor] = useState('gloss-white');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(imgs, setIsLoading);
  }, []);

  return (
    <>
      <NavItems />
      <main className={classes.MainWrapper}>
        <h1>Virtual Designer</h1>
        <div className='rounded-xl mt-8 w-full md:w-2/3 m-auto py-10 px-4'>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <Trailer rearColor={rearColor} frontColor={frontColor} />
              <div className='flex flex-wrap items-center justify-between pr-20 pl-16'>
                <ColorPicker label='Rear color' color={rearColor} setColor={setRearColor} />
                <ColorPicker label='Front color' color={frontColor} setColor={setFrontColor} />
              </div>
            </>
          )}
          <div className='px-20'>
            <h2 className='mt-12'>Visualize Your CORE</h2>
            <hr className='border-dashed my-4' />
            <p>
              The "Virtual Designer" displays the color selections for the CORE ICE 8019 ATX. 6511 and 6515 Models only have one solid color choice for the exterior of the unit.
              6519, 8019, and 8025 Models have multiple color choices.
            </p>
          </div>
          <div className='flex justify-center my-8'>
            <a
              href='https://core-ice.com/models/'
              target='_blank'
              rel='noopener noreferrer'
              className='uppercase font-bold py-4 px-12 border border-black text-white rounded'
              style={{ backgroundColor: '#24317A' }}>
              See Models
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
