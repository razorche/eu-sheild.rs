import React, {Fragment} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ProjectMasonryTwo = () => {
    return (
        <Fragment>
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                
            >
                <Masonry className="gx-4 mb-30" gutter="30px">
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-01.jpg" alt="img"/>
                    </div>
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-02.jpg" alt="img"/>
                    </div>
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-03.jpg" alt="img"/>
                    </div>
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-04.jpg" alt="img"/>
                    </div>
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-05.jpg" alt="img"/>
                    </div>
                    <div className="grid-item">
                        <img className="w-100" src="assets/img/work/solution-06.jpg" alt="img"/>
                    </div>
                </Masonry>
            </ResponsiveMasonry>
        </Fragment>
    )
}

export default ProjectMasonryTwo