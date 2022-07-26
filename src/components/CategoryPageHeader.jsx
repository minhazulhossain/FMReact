import { BsGrid, BsList } from 'react-icons/bs';

export default function CategoryPageHeader(props){


    return (
        <div className="d-block d-lg-flex justify-content-between align-items-end">
            <div className="page-breadcrumb">
                <h4>{props.pageTitle}</h4>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="/" className="text-decoration-none">Home</a></li>
                        <li className="breadcrumb-item">{props.pageTitle}</li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex mt-3 mt-lg-0">
                <div className="display-prod-grid flex-fill">
                    <button className="btn btn-outline-danger px-3 px-lg-none me-1" type="button" onClick={props.showGridView}>
                        <BsGrid />
                    </button>
                    <button className="btn btn-outline-danger px-3 px-lg-none" type="button" onClick={props.showListView}>
                        <BsList />
                    </button>
                </div>
                <div className="prod-sorting ms-1 flex-fill">
                    <select className="form-select custom-select" defaultValue={''}>
                        <option >Most popular</option>
                        <option value="recent">Recently Added</option>
                        <option value="Oldest">Sort By Old</option>
                        <option value="Latest">Latest</option>
                    </select>
                </div>
            </div>
            <div className="d-grid d-lg-none mt-3">
                <button className="btn btn-outline-danger" id="mobile-cat-filters" type="button">
                    <i className="bi bi-list-ul"></i> Filters
                </button>
            </div>
        </div>
    )
}