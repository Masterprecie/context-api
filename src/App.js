import "./App.css";
import Auth from "./component/Auth";
import Header from "./component/Header";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  );
}

export default App;