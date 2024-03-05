import React from "react";

import { PiHeartLight } from "react-icons/pi"; // Heart icon
import { PiShoppingCartLight } from "react-icons/pi"; // Cart icon

const Card = () => {
  return (
    <div className={"w-[275px] relative"}>
      <PiHeartLight
        className={
          "absolute right-0  text-primary-orange shadow-md text-3xl rounded-full w-12 h-12 p-2 cursor-pointer bg-white"
        }
      />
      <PiShoppingCartLight
        className={
          "absolute right-0 top-14 text-primary-orange shadow-md text-xl rounded-full w-12 h-12 p-2 cursor-pointer bg-white"
        }
      />
      <img
        src="https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/22-10/13/101182414_f2.JPG?w=600"
        width={275}
      />
      <span className={"bg-primary-orange text-white text-xs p-1"}>-75%</span>
      <div className={"text-xl mt-1.5"}>Kinetix</div>
      <div className={"text-primary-gray font-light leading-4"}>
        CLIFF 2PR BLACK Woman Snow Boots
      </div>
      <div
        className={"line-through text-sm text-primary-gray leading-4 mt-2.5"}
      >
        KZT 19,990.00
      </div>
      <div className={"text-primary-orange text-xl font-semibold leading-4"}>
        KZT 4,990.00
      </div>
    </div>
  );
};

export default Card;
