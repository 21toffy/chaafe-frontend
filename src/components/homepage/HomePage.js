import React from 'react'
import Main from "./Main"
import Banner from "./Banner"
import ShopByCategory from "./ShopByCategory"
import LatestProducts from "./LatestProducts"
import FindTheNextProduct from "./FindTheNextProduct"
import ModelsShow from "./ModelsShow"
import Footer from "./Footer"


const HomePage = ({props}) => {
    return (
        <Main>
        <Banner />
        <ShopByCategory/> 
        <LatestProducts />
        <FindTheNextProduct />
        <br />                  
        <ModelsShow />
        <Footer />
        </Main>
    )
}

export default HomePage
