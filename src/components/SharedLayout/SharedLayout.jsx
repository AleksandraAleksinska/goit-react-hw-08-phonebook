import React from 'react';
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import { AppHeader } from 'components/AppHeader/AppHeader';
// import css from './SharedLayout.module.css';

const SharedLayout = ({children}) => {
    return (
      <div>
        <AppHeader />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    )
  }
  
  export default SharedLayout