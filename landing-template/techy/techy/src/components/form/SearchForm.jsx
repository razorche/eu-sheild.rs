import React,{Fragment} from 'react'

const handleSubmit =(e)=> {
    e.preventDefault();
}

const SearchForm = () => {
    return (
        <Fragment>
            <form className="subscribe-form" action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Anything"/>
                <button className="widget-btn"><i className="bi bi-search"/></button>
            </form>
        </Fragment>
    )
}

export default SearchForm