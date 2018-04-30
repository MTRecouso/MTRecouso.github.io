import React, { Component } from 'react';
import Link from 'gatsby-link'
import { Button, DialogContainer, NavigationDrawer, SVGIcon, FontIcon } from 'react-md';

const inboxListItems = [{
  component: Link,
  key: 'home',
  primaryText: 'Home',
  activeClassName: 'secondary-color-text',
  to: '/',
  leftIcon:<FontIcon>home</FontIcon>,
  active: true,
}, {
  component: Link,
  key: 'blog',
  to: '/blog',
  activeClassName: 'secondary-color-text',
  primaryText: 'Blog',
  leftIcon: <FontIcon>star</FontIcon>
}];;

class Header extends Component {
  constructor() {
  super();

    // Update the items so they have an onClick handler to change the current page
    this.navItems = inboxListItems.map((item) => {
      return {
        ...item,
        onClick: () => this.setPage(item.key),
      };
    });
    this.pageTitle = this.navItems.find((item) => item.active == true).primaryText;

  }

  setPage = (key) => {
    this.navItems = this.navItems.map((item) => {
      return { ...item, active: item.key === key };
    });
    this.pageTitle = this.navItems.find((item) => item.active == true).primaryText
  };

  render() {
    const { children, siteTitle } = this.props;
    return (
          <NavigationDrawer
            navItems={this.navItems}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle={this.pageTitle}
            drawerTitle={siteTitle}
            contentId="main-demo-content"
          >
            <div className="main-container">{children}</div>
          </NavigationDrawer>
    );
  }
}

export default Header
