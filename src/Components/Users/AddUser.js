import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty value expected)'
            });
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;