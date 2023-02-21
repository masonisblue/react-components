// TODO
const { useState } = React;
function App() {

  return (
    <div>
      <h2>Grocery List</h2>
      <GroceryList items={['kale', 'cucumber']}/>
    </div>
  )
}

function GroceryList(props) {
  //const [groceryItems, setGroceryItems] = useState([]);


  return (
    <ul>
      {props.items.map( item => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  )
}

function GroceryListItem(props) {

  const [isBought, setIsBought] = useState(false);

  const style = {
    fontWeight: isBought? 'bold' : 'normal'
    //textDecoration: isBought ? 'line-through' : 'none'
  };

  return (
    <li
      style={style}
      onMouseEnter={() => setIsBought(true)}
      onMouseLeave={() => setIsBought(false)}>
      {props.item}
    </li>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));