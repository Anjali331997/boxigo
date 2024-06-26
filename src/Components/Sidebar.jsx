import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#9c0101" backgroundColor="white">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: '#9c0101' }}>
          BOXIGO
        </a>
      </CDBSidebarHeader>

      
      <CDBSidebarContent className="sidebar-content" style={{ color: '#9c0101' }}>
          <CDBSidebarMenu>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="truck">Dashboard</CDBSidebarMenuItem>
            </NavLink> 
            
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/quote" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file">GET QUOTE</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="arrow-left">Logout</CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 5px',
          }}
        >
          Boxigo
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
  )
}

export default Sidebar