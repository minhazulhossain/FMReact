export default function Button(props){
    return (
        <button className={`btn btn-${props.type} ${props.extraClasses} d-flex justify-content-center`}>
            {props.name ? <span className="d-none d-sm-block me-2">{props.name}</span> : ''}
            {props.iconName ? <i className={`bi bi-${props.iconName}`}></i> : ''}
        </button>
    )
}