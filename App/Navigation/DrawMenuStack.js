import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import SideMenu from '../Containers/DrawMenuContainer/SlideMenu';
import TabNavigation from './TabNavigation'

const DrawMenuStack = createDrawerNavigator(
  {
    TabNavigation
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    hideStatusBar: false,
    overlayColor: 'rgba(242, 242, 242, .2)'
  }
);

export default DrawMenuStack;