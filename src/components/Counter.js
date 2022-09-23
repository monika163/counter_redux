// import logo from './logo.svg';

// import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/actions';

function Counter() {
    const counter = useSelector((state) => state.counterReducer.count);
    const dispatch  = useDispatch();

    const handleIncrement = () =>{
            dispatch(increment(1))
    }


    const handleDecrement = () =>{
            dispatch(decrement(1))
    }

  return (
    <>

     <h1>Counter Component {counter}</h1> 
    <button onClick  = {() =>handleIncrement()}>INCREMENT</button>

    <br></br>

    <br></br>   <br></br>
    <button onClick  = {() =>handleDecrement()}>DECREMENT</button>


    </>
  );
}

export default Counter;
