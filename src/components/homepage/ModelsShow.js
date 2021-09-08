import React from 'react'
import gallery1 from "../../img/gallery/gallery1.jpg";
import gallery2 from "../../img/gallery/gallery2.jpg";
import gallery3 from "../../img/gallery/gallery3.jpg";
import gallery4 from "../../img/gallery/gallery4.jpg";
import gallery5 from "../../img/gallery/gallery5.jpg";


const ModelsShow = () => {
    return (
        <div class="gallery-wrapper lf-padding">
            <div class="gallery-area">
                <div class="container-fluid">
                    <div class="row">
                        {/* <div class="gallery-items">
                            <img src={gallery1} alt="" />
                        </div>  */}
                        <div class="gallery-items">
                            <img src={gallery2} alt="" />
                        </div>
                        <div class="gallery-items">
                            <img src={gallery3} alt="" />
                        </div>
                        <div class="gallery-items">
                            <img src={gallery4} alt="" />
                        </div>
                        <div class="gallery-items">
                            <img src={gallery5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelsShow
