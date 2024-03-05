"use client";

import React, { useState } from "react";
import Link from "next/link";
import ShoesExpanded from "@/app/components/ShoesExpanded";

const NavBar = () => {
  const [isShoesHover, setIsShoesHover] = React.useState(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState("");

  const navItems: string[] = [
    "Shoes",
    "Sport",
    "Clothing",
    "Bags",
    "Accessories",
    "Brands",
    "SALE %",
    "All Categories",
  ];

  interface ShoesHoverData {
    list1: string[];
    list2: string[];
    list3: string[];
    brands: string[];
    img: string;
  }

  const shoesHoverData: ShoesHoverData = {
    list1: [
      "All Shoes",
      "Sneakers",
      "Boots",
      "Knee High Boots",
      "Loafers & Flats",
      "Casual Shoes",
      "Smart Shoes",
    ],
    list2: [
      "Running",
      "Walking",
      "Football",
      "Basketball",
      "Tennis",
      "Hiking & Outdoor",
    ],
    list3: ["Heels", "Ballerinas", "Sandals", "Slippers"],
    brands: [
      "Adidas",
      "Nike",
      "Puma",
      "Reebok",
      "Lumberjack",
      "U.S. Polo Assn.",
      "Lotto",
      "Nine West",
      "Inci",
      "Butigo",
      "Polaris",
      "Kinetix",
    ],
    img: "https://floimages.mncdn.com/media/catalog/product/img/content/24-01/11/anasayfa-1-1681905979.jpg",
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const returnExpandedBlock = (index: number) => {
    switch (index) {
      case 0:
        return <ShoesExpanded data={shoesHoverData} />;
      default:
        return null;
    }
  };
  return (
    <nav className={"bg-secondary-bg border-y relative"}>
      <div className={"max-w-[1180px] my-0 mx-auto"}>
        <div className={"flex justify-between items-center text-lg font-light"}>
          {navItems.map((navItem: string, index) => (
            <div
              key={navItem}
              onMouseEnter={() => {
                // setIsShoesHover(true);
                setHoveredIndex(index);
                setHoveredNavItem(navItem);
              }}
              className="border-y-4 border-secondary-bg hover:border-b-primary-orange"
            >
              <Link
                href={`/${navItem.toLowerCase()}`}
                className={`hover:text-primary-orange ${navItem === "SALE %" ? "text-primary-orange" : ""} hover:font-mediumJ py-1 px-2 flex flex-col`}
              >
                {navItem}
              </Link>
            </div>
          ))}
        </div>
        <div onMouseLeave={() => setHoveredIndex(null)}>
          {hoveredIndex && returnExpandedBlock(hoveredIndex)}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
