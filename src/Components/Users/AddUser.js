import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "../Users/AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (enteredAge < 1) {
            return;
        }
        console.log(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;