import { useState } from 'react';

import './App.css';
import '@fontsource/inter';
import Button from '@mui/joy/Button';

function App() {
  const [theySaidYes, setTheySaidYes] = useState(false);
  const [maybe, setMaybe] = useState(0);

  if (theySaidYes) {
    return (<div className="flex flex-col items-center content-center padding p-8">
      <h1 className="text-4xl font-bold mb-8">
        YAYYYYYYY
      </h1>
      <div className="max-w-lg mb-8">
        <img src={require('./static/ily-cute.gif')} alt="loading..." />
      </div>
      <h1 className="text-4xl font-bold mb-8">
        Happy Valentines!
      </h1>
      <div className="mr-4">
        <Button size="lg" onClick={() => {
          setTheySaidYes(false);
          setMaybe(0);
        }}>Restart</Button>
      </div>
    </div>);
  } else if (maybe === 1) {
    return (
      <div className="flex flex-col items-center content-center padding p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dear John,
        </h1>
        <div className="max-w-lg mb-8">
          <img src={require('./static/sad-cute.gif')} alt="loading..." />
        </div>
        <h1 className="text-4xl font-bold mb-8">
          Oh... Are you sure?? I'll ask again, will you be my Valentine's?
        </h1>
        <div className="flex">
          <div className="mr-4">
            <Button sx={{ width: '8rem', height: '4rem' }} color="success" onClick={() => setTheySaidYes(true)}>
              <p className="text-4xl">YES</p>
            </Button>
          </div>
          <div>
            <Button size="lg" onClick={() => setMaybe(maybe + 1)}>Ehhhhh</Button>
          </div>
        </div>
      </div>
    );
  } else if (maybe === 2) {
    return (
      <div className="flex flex-col items-center content-center padding p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dear John,
        </h1>
        <div className="max-w-lg mb-8">
          <img src={require('./static/pliss-cute.gif')} alt="loading..." />
        </div>
        <h1 className="text-4xl font-bold mb-8">
          Will you pleaseeee be my Valentine's?
        </h1>
        <div className="flex">
          <div className="mr-4">
            <Button sx={{ width: '10rem', height: '6rem' }} color="success" onClick={() => setTheySaidYes(true)}>
              <p className="text-5xl">YES</p>
            </Button>
          </div>
          <div>
            <Button size="lg" onClick={() => setMaybe(maybe + 1)}>Still no...</Button>
          </div>
        </div>
      </div>
    );
  } else if (maybe > 2) {
    return (
      <div className="flex flex-col items-center content-center padding p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dear John,
        </h1>
        <div className="max-w-lg mb-8">
          <img src={require('./static/angry-cute.gif')} alt="loading..." />
        </div>
        <h1 className="text-4xl font-bold mb-8">
          You're giving me no choice... Will you be my Valentines?????
        </h1>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Button sx={{ width: `${9 + (maybe)}rem`, height: `${3 + (maybe)}rem` }} color="success" onClick={() => setTheySaidYes(true)}>
              <p className="text-6xl">YES</p>
            </Button>
          </div>
          {maybe <= 10 ? (
            <div>
              <Button size="lg" onClick={() => setMaybe(maybe + 1)}>NOPE</Button>
            </div>
          ) : null
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center content-center padding p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dear John,
        </h1>
        <div className="max-w-lg">
          <img src={require('./static/peach-cat-will-you-be-my-valentine-pwv0x5b3amw0t6u9.gif')} alt="loading..." />
        </div>
        <div className="flex">
          <div className="mr-4">
            <Button size="lg" color="success" onClick={() => setTheySaidYes(true)}>YES</Button>
          </div>
          <Button size="lg" onClick={() => setMaybe(maybe + 1)}>Maybe?</Button>
        </div>
      </div>
    );
  }
}

export default App;
