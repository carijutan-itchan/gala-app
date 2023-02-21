import React from 'react';
import ButtonPrimary from '../shared/buttons/ButtonPrimary';

const App: React.FC = (): JSX.Element => {
  return <div>
    <h1> Jhon miss na kita Jhon  - JEPOY </h1>

    {/* @ts-ignore */}
    <ButtonPrimary
      className="mt-6 sm:mt-11"
      buttonName='Button'
    />
  </div>
};

export default App;