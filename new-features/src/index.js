import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp'



// const App = (props) => {

//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log('This should only run once')
//   },[])

//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = `${text} - ${count}`
//   },[count])

//   const increment = () => {
//     setCount(count+1);
//   }

//   const decrement = () => {
//     setCount(count-1);
//   }

//   const reset = () => {
//     setCount(props.count);
//   }

//   const inputType = (e) => {
//     setText(e.target.value);
//   }

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input type="text" placeholder="type here" onChange={inputType}></input>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(
  <NoteApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
