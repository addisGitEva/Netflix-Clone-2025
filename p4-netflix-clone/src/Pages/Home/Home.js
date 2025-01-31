import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banners/Banner";
import Rowlist from "../../Components/Rows/RowList/Rowlist";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
}

export default Home;
