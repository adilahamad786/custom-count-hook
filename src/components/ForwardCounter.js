// import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(); // call for forward counting logic bydefault argument is "true".
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
