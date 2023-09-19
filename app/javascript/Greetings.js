import { fetchGreetings } from '../redux/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
       <div>
          <h1>Greeting: </h1>
          {randomGreeting.map((greeting) => (
            <>
                <p>{greeting.message}</p>
            </>
          ))}
       </div>
    </>
  );
};
export default Greeting;