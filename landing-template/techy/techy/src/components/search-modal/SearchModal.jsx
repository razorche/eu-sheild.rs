
import React, {Fragment} from 'react';
import Modal from 'react-modal';


const SearchModal = (props) => {
    const {isOpen, onClick} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <Fragment>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClick}
                className="offcanvas-tops"
                contentLabel="Example Modal"
            >

               
                <div className="search-wrap">
                    <button onClick={onClick}><i class="bi bi-x-square"></i></button>
                    <form method="get" onClick={handleSubmit} className="search-form-input">
                        <input
                            type="search"
                            className="main-search-input"
                            placeholder="Search Your Keyword..."/>
                    </form>
                </div>
            </Modal>
        </Fragment>
    )
}

export default SearchModal