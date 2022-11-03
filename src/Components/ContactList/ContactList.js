import React from "react";
import styled from "styled-components";

const ContactList = (props) => {
  return (
    <ContactListWrapper className="overflow-auto">
      <ContactListMaxWidth className="w-max flex flex-row gap-5 py-5">
        {props.children}
      </ContactListMaxWidth>
    </ContactListWrapper>
  );
};

const ContactListWrapper = styled.div``;
const ContactListMaxWidth = styled.div``;

export default ContactList;
