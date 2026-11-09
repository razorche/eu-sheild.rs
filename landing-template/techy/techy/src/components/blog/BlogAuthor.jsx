import React, {Fragment} from 'react'

const BlogAuthor = (props) => {
    return (
        <Fragment>
            <figure className={`author-blockquote mb-30 ${props.bgColor}`}>
                <figcaption className="blockquote-footer">
                    Jason Momoa
                </figcaption>
                <blockquote className="blockquote">
                    <p>“ Dramatically envisioneer interactive leadership through functionalized ROI.
                        Professionally simp synergistic initiatives before effective ch. Dramatically
                        create fully researched innovati witho multifunctional partnerships.”</p>
                </blockquote>
            </figure>
        </Fragment>
    )
}

export default BlogAuthor