import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Calculator from './components/Calculator.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Calculator />

      </div>
    </Provider>
  );
}

export default App;
