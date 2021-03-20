import NavBar from "./components/Nav/NavBar";
import AddFriends from "./components/addFriends/AddFriends";
import Home from "./components/Home/Home"
import AmigoDetail from "./components/AmigoDetail/AmigoDetail";


// import { addFriend } from "./actions/index";

import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/add' component={AddFriends}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/edit/:id' component={AmigoDetail}/>
    </>
  );
}

export default App;
