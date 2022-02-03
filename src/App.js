import React, {useState} from "react";
import './App.css';
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (userName, userAge) => {
        setUserList(
            (prevUserList) => {
                return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
            }
        );
    };

    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
