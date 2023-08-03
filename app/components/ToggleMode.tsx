'use client'
import React, { useContext, useState } from 'react'
import {MdOutlineLightMode, MdDarkMode} from "react-icons/md"
import { useTheme } from 'next-themes';
import MyThemeContext from '../context/Context';



const ToggleMode = () => {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const {theme, setTheme} = useTheme();

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  console.log(themeCtx.isDarkTheme)
  return (
    <div onClick={() => toggleThemeHandler()}  className={`px-4 py-3 hover:bg-emerald-400 dark:hover:bg-slate-700 transition cursor-pointer `}>
      <div>
        {themeCtx.isDarkTheme ? <MdOutlineLightMode size={30} color='yellow'/> : <MdDarkMode size={30} />}
      </div>
    </div>
  )
}

export default ToggleMode