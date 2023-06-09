import logo from "./logo.svg"
import "./App.css"
import { Component } from "react"
import CardList from "./components/card-list/card-list.components"
import SearchBox from "./components/search-box/search-box.components"

class App extends Component {

  constructor() {
    super()
    this.state = { monsters: [], searchField: '' }
  }

  componentDidMount () {
    //api request
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users
          }
        })
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => { return { searchField } })
  }

  render () {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchField) });
    return (
      <div className="App">

        <SearchBox onChangeHanddler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
