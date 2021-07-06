import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as faIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'Filter',
    path: '/Filter',
    icon: <ImIcons.ImFilter/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'States',
        path: '/UsStates',
        icon: <faIcons.FaCity />,
        cName: 'sub-nav'
      },
      
    ]
  },
 
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

// export default SidebarData;