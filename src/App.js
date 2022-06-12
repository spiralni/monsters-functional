import logo from './logo.svg';
import './App.css';

import { Component, useEffect, useState } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const ApiUrl = 'https://jsonplaceholder.typicode.com/users'

const App = () => {

  const [searchFilter, setSearchFilter] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch(ApiUrl)
    .then(response => response.json())
    .then(monsters => {
      const list = monsters.map(monster => ({ id: monster.id, name: monster.name, email: monster.email }))
      setMonsters(list)      
    })
  }, [])

  useEffect(() => {
    const filtered = monsters
      .filter(monster => monster.name.toLowerCase().includes(searchFilter.toLowerCase()))
    setFilteredMonsters(filtered)
  }, [searchFilter, monsters]) 

  return (
    <div className="App">
      <h1 className="app-title">Robo Monsters</h1>
      
      <SearchBox placeholder="search" className="search-box-monsters" onSearchChange={filter => setSearchFilter(filter)}></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  )
}

export default App;
