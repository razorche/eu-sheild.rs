import React, {Fragment} from 'react'
import BlockStyleTwo from '../block/BlockStyleTwo'

const NewsletterOne = () => {
    return (
        <Fragment> 
            <section className="techy-newsletter pt-120 pt-lg-60">
                <div className="container">
                    <div
                        className="row gx-4 gx-xxl-5 align-items-center justify-content-center borders">
                        <div className="col-lg-8">
                            <BlockStyleTwo />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsletterOne
