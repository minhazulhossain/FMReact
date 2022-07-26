export default function Breadcrumb(props){

    return (
        <div className="page-breadcrumb py-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href={props.link1} className="text-decoration-none">
                  {props.name1}
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.currentPage}
              </li>
            </ol>
          </nav>
        </div>
    )

}