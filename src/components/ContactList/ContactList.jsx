import React from 'react';
import PropTypes from 'prop-types';
import { UserList } from './ContactList.styled';

import { ContactItem } from './ContactItem/ContactItem';
export const ContactList = ({ actualData }) => {
  return (
    <UserList>
      {actualData.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.userInfo.name}
            number={contact.userInfo.number}
          />
        );
      })}
    </UserList>
  );
};

ContactList.propTypes = {
  actualData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
