import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'



//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import TeamTwoA from '../../../components/team/TeamTwoA'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'
import { Link } from 'react-router-dom'


const Team = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Team || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Team" />
                {/* PageTitle */}

                {/*techy-team start*/}
                <section className="techy-team team-sec-two mt-0 pt-145 pb-145 pt-lg-55 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-55">
                                    <h6 className="sub-title mb-20">Our Team</h6>
                                    <h2 className="sect-title">Expert Team Member</h2>
                                </div>
                            </div>
                        </div>
                        {/* TeamTwoA start*/}
                        <TeamTwoA />
                        {/* TeamTwoA end */}
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12 text-center pt-15" data-aos="fade-up" data-aos-delay={200}>
                                <Link className="theme_btn" to="/team">See All Member</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-team end*/}

                {/*techy-newsletter start*/}
                <NewsletterTwo />
                {/*techy-newsletter end*/}

                <FooterThree />

            </div>

        </Fragment>
    )
}

export default Team