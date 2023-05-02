import React, { useEffect, useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../Item";
import * as data from "../../data";
import {SearchNormal,ShoppingCart} from "iconsax-react";
import { NavLink } from 'react-router-dom';



const MenuTabs = () => {
  const [value, setValue] = useState("all");
  const isNoneMobile = useMediaQuery("(min-width:600px)");
  const handelChange = (event, newValue) => {
    setValue(newValue)
  }
  const mainCourse = data.productsData.filter((item) => item.category === "mainCourse");
  const Appetizer = data.productsData.filter((item) => item.category === "Appetizer");
  const fastFood = data.productsData.filter((item) => item.category === "fastFood");
  const Seafood = data.productsData.filter((item) => item.category === "Seafood");
  return (
    <Box width="100%" margin="80px auto">
      <Tabs
        textColor='success'
        indicatorColor='success'
        value={value}
        onChange={handelChange}
        centered
        TabIndicatorProps={{ sx: { display: isNoneMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap"
          },
          ".Mui-selected": {
            color: `green`,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "green",
            height: 3,
          },
        }}
      >
        <Tab label="منو کامل" value="all" />
        <Tab label="غذای اصلی" value="mainCourse" />
        <Tab label="پیش غذا" value="Appetizer" />
        <Tab label="فست فود" value="fastFood" />
        <Tab label="غذای دریایی" value="Seafood" />
      </Tabs>
      <div className='flex w-full justify-center items-center gap-5 flex-col md:flex-row'>
       <div className='flex md:w-[400px] justify-center items-center relative'>
          <input type="text" className='border-2 focus:ring-emerald-700 focus:ring focus:outline-none text-xs px-3 py-3 border-emerald-700 rounded md:w-[400px] md:h-[40px] placeholder:text-emerald-700'placeholder='جستجو....' />
          <SearchNormal className='text-emerald-700 absolute left-3'/>
       </div>
       <NavLink>
        <button className='flex gap-3 items-center border border-emerald-700 text-emerald-700 bg-white py-1 px-3 rounded-md hover:bg-emerald-700 hover:text-white transition-all'>
         <p>تکمیل خرید</p>
         <ShoppingCart/>
        </button>
      </NavLink>
      </div>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" && data.productsData.map((item) => (
          <Item
            item={item}
            key={`${item.name}-${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
            score={item.score}
            scoreText={item.scoreText}
            discount={item.discount}
            discountPercent={item.discountPercent}
          />
        ))}
        {value === "mainCourse" && mainCourse.map((item) => (
          <Item
            item={item}
            key={`${item.name}-${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
            score={item.score}
            scoreText={item.scoreText}
            discount={item.discount}
            discountPercent={item.discountPercent}
          />
        ))}
        {value === "Appetizer" && Appetizer.map((item) => (
          <Item
            item={item}
            key={`${item.name}-${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
            score={item.score}
            scoreText={item.scoreText}
            discount={item.discount}
            discountPercent={item.discountPercent}
          />
        ))}
        {value === "fastFood" && fastFood.map((item) => (
          <Item
            item={item}
            key={`${item.name}-${item.id}`}
            image={item.image}
            name={item.name}
            price={item.price}
            score={item.score}
            scoreText={item.scoreText}
            discount={item.discount}
            discountPercent={item.discountPercent}
          />
        ))}
      </Box>
    </Box>
  );
}

export default MenuTabs;