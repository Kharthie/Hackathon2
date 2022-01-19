import { link } from "fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center nav-item active"
          href="index.html"
        >
          <div class="sidebar-brand-text mx-3">Money Manager...,</div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <Link class="nav-link" to="/dashboard">
            <i class="fad fa-th"></i>
            <span>Overview</span>
          </Link>
        </li>

        {/* 
<li class="nav-item">
    <Link class="nav-link collapsed" to="/user-list" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo"> */}

        
        {/* 
<li class="nav-item">
    <Link class="nav-link collapsed" to="/user-list" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo"> */}

        <li class="nav-item active">
          <Link class="nav-link" to="/weekly">
            <i class="fas fa-chart-line"></i>
            <span>Weekly</span>
          </Link>
        </li>

        <li class="nav-item active">
          <Link class="nav-link" to="/monthly">
           
            <i class="fad fa-calendar-week"></i>
            
            <span>Monthly</span>
          </Link>
        </li>

        <li class="nav-item active">
          <Link class="nav-link" to="/yearly">
            <i class="fad fa-arrow-to-right"></i>
            <span>Yearly</span>
          </Link>
        </li>

       


        <li class="nav-item active">
          <Link class="nav-link" to="/settings">
            
            <i class="fad fa-user-cog"></i>
            <span>Settings</span>
          </Link>
        </li>

        <li class="nav-item active">
          <Link class="nav-link" to="/budgetmanager">

            
            
            <i class="fad fa-calculator-alt"></i>
            <span>Budget Manager</span>
          </Link>
        </li>

      </ul>
    </>
  );
}

export default Sidebar;



