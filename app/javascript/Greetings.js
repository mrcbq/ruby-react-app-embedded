import { fetchGreetings } from './redux/greetingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const Greetings = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Greeting: </h1>
        <p>{randomGreeting.greetings.greeting}</p>
      </div>
    </>
  );
};

export default Greetings;
