import React, {Fragment} from 'react'

const CommentContent = [
    {
        avatar:'comment-1',
        authorName: 'Rosalina Kelian',
        icon: 'fal fa-reply',
        btnText: 'Reply',
        date: '24th March 2022',
        icon2: 'far fa-calendar-alt',
        desc: 'For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful — dare we say, even fun — to develop and maintain. Regardless of whether you’re ing up a storefront for a new merchant.',
        margin: ''
    },
    {
        avatar:'comment-2',
        authorName: 'Rosalina Kelian',
        icon: 'fal fa-reply',
        btnText: 'Reply',
        date: '24th March 2022',
        icon2: 'far fa-calendar-alt',
        desc: 'Building a customer experience that will be visited by milBuilding a customer experience that will be visited by millions, the goal for Hydrogen is to eliminate undifferentiated and gnarly fast and focus on delivering merchant value.',
        margin: 'ml-130 ml-lg-30 ml-xs-0'
    },
    {
        avatar:'comment-3',
        authorName: 'Rosalina Kelian',
        icon: 'fal fa-reply',
        btnText: 'Reply',
        date: '24th March 2022',
        icon2: 'far fa-calendar-alt',
        desc: 'nlocking such features and making them all work nicely together required that we work hands-on with React core team on helping define and prototype server components; Vite ecosystem on server-side streaming; Google’s Aurora team on integrating conformance.',
        margin:''
    },
]

const BlogComment = () => {
    return (
        <Fragment>
            <ul className="comment-list list-none">
                {CommentContent.map((val, i)=>(
                    <li key={i} className={val.margin}>
                        <div className="comment-box">
                            <div className="comment-avatar">
                                <img src={`assets/img/blog/${val.avatar}.jpg`} alt="Img"/>
                            </div>
                            <div className="comment-content">
                                <h5>{val.authorName}
                                    <a href="#" className="reply"><i className={val.icon} /> {val.btnText}</a>
                                </h5>
                                <p className="fs-14 mb-15"><i className={val.icon2}/>
                                    {val.date}</p>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default BlogComment