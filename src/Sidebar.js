import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon   className="sidebar_twitterIcon"        />
      <SidebarOption active Icon={HomeIcon} text="Home"  />
      <SidebarOption Icon={SearchIcon} text="Explore"  /> 
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification"  /> 
      <SidebarOption Icon={MailOutlineIcon} text="Messages"  />  
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"  /> 
      <SidebarOption Icon={ListIcon} text="Lists"  /> 
      <SidebarOption Icon={PermIdentityIcon} text="Profile"  />
      <SidebarOption Icon={MoreHorizIcon} text="More"  />  
       <Button  variant = "contained" className="sidebar__tweet" fullWidth > Tweet</Button>
    </div>
  );
}

export default Sidebar;
