import Card from "../UI/Card";
import styles from "../Users/AddUser.module.css";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text"/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number"/>
                <button type={"submit"}>Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;