import './ListDisplay.css'

const ListDisplay = ({ title, children }) => {


    return (
        <div className="listDisplay">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default ListDisplay