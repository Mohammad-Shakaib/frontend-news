import './App.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <App />
      </Provider>
    </div>
    
  );
}

export default App;
