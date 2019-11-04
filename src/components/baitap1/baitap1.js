import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Content from "./content";
import Footer from "./footer";
function BaiTap1() {
    return (
        <div>
            <Header />
            <div className="contents">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </div>
    )
}
export default BaiTap1;