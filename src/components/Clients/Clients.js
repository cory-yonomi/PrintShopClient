import ListDisplay from "../ui/ListDisplay"
import CustomerForm from "./ClientForm"

const Clients = () => {
    
    return (
        <div className='main'>
            <div className='lists'>
            <ListDisplay>

            </ListDisplay>
                <CustomerForm />
                </div>
        </div>
    )
}

export default Clients