
import './App.css';
import Header from './components/Header';
import {useSelector , useDispatch} from 'react-redux';
import { inc , dec, mul, div } from './reducers';


function App() {
  const currState = useSelector((state)=>state.number);

  const dispatch = useDispatch()
  return (
    <div className="App">
      <Header />

      <h1>{currState}</h1>
      <button onClick={()=>dispatch(inc(1))}>Inc</button>
      <button style={{marginLeft:"10px"}} onClick={()=>dispatch(dec(2))}>Dec</button>
      <button style={{marginLeft:"10px"}} onClick={()=>dispatch(mul(2))}>Mul</button>
      <button style={{marginLeft:"10px"}} onClick={()=>dispatch(div(2))}>Div</button>
    </div>
  );
}

export default App;
