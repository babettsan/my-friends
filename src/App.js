import NavBar from "./components/Nav/NavBar";
import AddFriends from "./components/addFriends/AddFriends";

// import { addFriend } from "./actions/index";

import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/add' component={AddFriends}/>
        {/*<AddFriends addFriend={addFriend}/>*/}
    </>
  );
}

export default App;
