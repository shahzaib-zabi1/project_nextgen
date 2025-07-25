import React, { useState } from "react";
import MyMenu from "./MyMenu";
import { MenuData } from "./MenuData";
import Fade from 'react-reveal/Fade';

const Menu = () => {
  const [menuItems, setmenuItems] = useState(MenuData);

  return (
    <>
      <section className='text-gray-600 body-font'>

        <div className='container lg:max-w-[1324px] px-5 py-20 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12 lg:mb-20'>
            <p className='title-font text-orange-400 sec-heading font-medium text-3xl mb-2'>
              Food Menu
            </p>
            <h1 className='font-nunito hero-text font-black text-black text-3xl lg:text-5xl'>
              Most Popular Items
            </h1>
          </div>
          <Fade bottom>
            <div className='flex flex-wrap -m-2'>
              {menuItems.map((items) => {
                return (
                  <MyMenu
                    key={items.id}
                    img={items.img}
                    desciption={items.desc}
                    title={items.title}
                    price={items.price}
                  />
                );
              })}
            </div>
          </Fade>
        </div>

      </section>
    </>
  );
};

export default Menu;
