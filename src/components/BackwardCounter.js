// import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false); // call for backword counting logic
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
