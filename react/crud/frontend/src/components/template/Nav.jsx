import './Nav.css'
import './NavItem.jsx'
import React from 'react'
import NavItem from './NavItem.jsx'
import { Link } from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className="menu">
       <NavItem to="/" icon="home" title="Início" />
       <NavItem to="/users" icon="users" title="Usuários" />
    </nav>
</aside>