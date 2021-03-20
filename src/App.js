import NavBar from "./components/Nav/NavBar";
import AddFriends from "./components/addFriends/AddFriends";
import Home from "./components/Home/Home"

// import { addFriend } from "./actions/index";

import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/add' component={AddFriends}/>
      <Route exact path='/' component={Home}/>
        {/*<AddFriends addFriend={addFriend}/>*/}
    </>
  );
}

export default App;
