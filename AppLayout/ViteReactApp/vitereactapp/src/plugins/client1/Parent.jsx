import React from 'react'
import NavigationDrawer from '../../components/Menu/DrawerMenu/NavigationDrawer';
import MoreResponsiveLayout from './MoreResponsiveLayout'
import useScreenSize from '../../hooks/useScreenSize';
import AppRouter from '../../router/AppRouter';

function Parent() {
    const screenSize = useScreenSize();
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
