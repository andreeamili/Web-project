import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const SidebarData=[
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About us',
        path:'/about',
        icon: <GiIcons.GiBookmarklet/>,
        cName: 'nav-text' 
    },
    {
        title: 'Our Team',
        path:'/our-team',
        icon: <AiIcons.AiOutlineTeam/>,
        cName: 'nav-text' 
    },
    {
        title: 'Services',
        path:'/services',
        icon: <GiIcons.GiHorseshoe />,
        cName: 'nav-text'
    },
    {
        title: 'Competitions',
        path:'/competitions',
        icon: <FaIcons.FaMedal />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path:'/contact',
        icon: <AiIcons.AiFillPhone />,
        cName: 'nav-text'
    }

]