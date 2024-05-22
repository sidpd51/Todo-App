import './App.css'
import Header from './components/Header';
import SideMenu from './components/SideMenu'
import Body from './components/Body'


function App() {

  return (
    <>
      <Header></Header>
      <div className="flex flex-auto  mx-auto mt-4">
        <SideMenu></SideMenu>
        <Body></Body>
      </div>
    </>
  )
}

export default App
