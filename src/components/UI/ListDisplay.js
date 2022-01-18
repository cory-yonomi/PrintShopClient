import './ListDisplay.css'

const ListDisplay = ({ title, children }) => {


    return (
        <div className="listDisplay">
            <tr className="h3"><h3 >{title}</h3></tr>
            {children}
        </div>
    )
}

export default ListDisplay