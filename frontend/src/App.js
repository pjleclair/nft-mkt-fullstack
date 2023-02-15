import "./App.css"
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import Dashboard from "./components/dashboard/dashboard"
import Bid from "./components/bid/bid"
import Collection from "./components/collection/collection"
import Profile from "./components/profile/profile"
import Settings from "./components/settings/settings"
import React from 'react'
import axios from 'axios'

function App() {

  const [selectedComponent, setSelectedComponent] = React.useState('Dashboard')

  const [trendingNfts, setTrendingNfts] = React.useState([])
  const [displayArray, setDisplayArray] = React.useState([])
  const url = "/api/nfts/"

  React.useEffect(() => {
      axios
          .get(`${url}list?order=h24_volume_native_asc`)
          .then(response => {
              console.log(response.data)
              setTrendingNfts(response.data)
          })
  }, [])

  React.useEffect(() => {
      const array = trendingNfts.slice(0,4)
      const newArray = array.map((obj,i) => {
          const promise = axios
                  .get(`${url}${obj.id}`)
                  .then((response) => {
                      return response.data
                  })
          return promise
      })
      setDisplayArray(newArray)
  },[trendingNfts])

  return (
    <div className="App">
      <Sidebar
        selectedComponent={selectedComponent}
        changeComponent={setSelectedComponent}
      />
      <div className="container">
        <Header />
        {selectedComponent === 'Dashboard' && <Dashboard displayArray={displayArray}/>}
        {selectedComponent === 'Bid' && <Bid />}
        {selectedComponent === 'Collection' && <Collection />}
        {selectedComponent === 'Profile' && <Profile />}
        {selectedComponent === 'Settings' && <Settings />}
      </div>
    </div>
  );
}

export default App;
