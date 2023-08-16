import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  const { greetings } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {greetings && <h2>{greetings.data}</h2>}
    </div>
  );
};

export default Greeting;
