const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"/>
        </form>
    );
}

export default AddUser;