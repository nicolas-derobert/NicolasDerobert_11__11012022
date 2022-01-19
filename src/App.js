import Header from './Layouts/Header/Header'
// import data from './Utils/dataHandler'
import data from './Assets/Data/logements.json'

function App() {
  console.log(data)
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
