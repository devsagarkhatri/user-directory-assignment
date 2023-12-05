import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PeopleDirectory from "./pages/PeopleDirectory";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PeopleDirectory />}></Route>
        <Route path="/user/:userId" element={<UserProfile />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
