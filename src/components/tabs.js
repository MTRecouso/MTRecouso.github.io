import React from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, Tabs, Tab } from 'react-md';

const HeaderTab = () => (
  <TabsContainer panelClassName="md-grid" colored>
    <Tabs tabId="simple-tab">
      <Tab label="Home">
        <h3>Home</h3>
      </Tab>
      <Tab label="Blog">
        <h3>Blog</h3>
      </Tab>
    </Tabs>
  </TabsContainer>
);

export default HeaderTab;