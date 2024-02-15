import './App.css';
import menuList from './Menu';
import BoxMenu from './Box';

function App() {

  const rows = menuList.map((x) => {
    //load the data
    return <BoxMenu
          key={x.id}
          type-={x.type}
          name={x.name}
          description={x.description}
          src = {x.picture}
    
    />
  }
  );


  return (
    <div className='App'>
      <h1 id = "title">โหวตอาหาร</h1>
      {rows}
    </div>
    
  )
}

export default App;
