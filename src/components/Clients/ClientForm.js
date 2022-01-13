const CustomerForm = () => {

    return (
        <div>
            <h3>Add A Client</h3>
            <form >
                <label htmlFor="company">Company:</label>
                <input type="text" /><br />
                <label htmlFor="contactName">Contact:</label>
                <input type="text" /><br />
                <label htmlFor="email">Email:</label>
                <input type="text" /><br />
                <label htmlFor="phone">Phone:</label>
                <input type="text" /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CustomerForm