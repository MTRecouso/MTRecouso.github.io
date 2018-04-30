import React, { Component } from 'react';
import { List, Subheader, ListItem, Avatar, FontIcon } from 'react-md';

const ContactList = (options) => {
    /*const aaa = <List className={listClass}>
      <Subheader 
        primaryText="Contato"
        primary
        className="contact" 
      />*/

      const items = options.options.elements.map((element, i) => 
        <ListItem
          key={i}
          component = "a" 
          href = {element.link}
          leftAvatar={<Avatar icon={<FontIcon iconClassName={element.avatar} />} />}
          primaryText={element.text}
          primaryTextClassName={options.options.listTextClass}
        />
      )
      return( 
        <List className={options.options.listClass}>
            <Subheader 
            primaryText="Contato"
            primary
            className="contact"
            />
            {items}
        </List> 
      )
}

console.log(ContactList)

export default ContactList