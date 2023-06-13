
import "./App.css"
import { useState, useEffect } from "react"
import CardList from "./components/card-list/card-list.components"
import SearchBox from "./components/search-box/search-box.components"


const App = () => {

  const [ searchField, setSearchField ] = useState('');//[value,setValue]
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilterMonsters ] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchField) });
    setFilterMonsters(newFilteredMonsters)
  }, [ monsters, searchField ]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster RocoRoco </h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}
// class App extends Component {

// constructor() {
//   super()
//   this.state = { monsters: [], searchField: '' }
// }



//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => { return { searchField } })
//   }

//   render () {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;



//   }
// }

export default App
