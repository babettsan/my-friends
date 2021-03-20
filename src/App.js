import NavBar from "./components/Nav/NavBar";
import Addusers from "./components/addusers/AddUsers";

import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/add' component={Addusers}/>
    </>
  );
}

export default App;
