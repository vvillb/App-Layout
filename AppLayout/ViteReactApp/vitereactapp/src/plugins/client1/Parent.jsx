import React from 'react'
import NavigationDrawer from '../../components/Menu/DrawerMenu/NavigationDrawer';
import MoreResponsiveLayout from './MoreResponsiveLayout'
import GetScreenSize from '../../components/screenSize/getScreenSize';
import AppRouter from '../../router/AppRouter';

function Parent() {
    const screenSize = GetScreenSize();
    if (screenSize === 'xs') {
        return (
        <MoreResponsiveLayout>
            <NavigationDrawer/>
        </MoreResponsiveLayout>
        );
      }
        return (
            <AppRouter/>
        )
}

export default Parent
