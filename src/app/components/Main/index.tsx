import React from "react";

import NavBar from "@/app/components/NavBar";
import BannerSneakerLove from "@/app/components/BannerSneakerLove";
import PopularBrands from "@/app/components/PopularBrands";
import PopularCategories from "@/app/components/PopularCategories";

const Main = () => {
  return (
    <main>
      <BannerSneakerLove />
      <PopularBrands />
      <PopularCategories />
    </main>
  );
};

export default Main;
