import Item from './components/Item';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
     <Item name="MacBook Pro" price={100000} /> 
     <Item name="Pendrive" price={1000} /> 
     <Item name="mobile" price={15000} /> 
     <Item name="Nokia" price={5000} /> 
     <Cart/>
    </div>
  );
}

export default App;
