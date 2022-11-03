import React from "react";
import styled from "styled-components";

const AppointmentList = (props) => {
  return (
    <AppointmentListWrapper className="overflow-auto">
      <AppointmentListMaxWidth className="w-max flex flex-row gap-5 py-5">
        {props.children}
      </AppointmentListMaxWidth>
    </AppointmentListWrapper>
  );
};

const AppointmentListWrapper = styled.div``;
const AppointmentListMaxWidth = styled.div``;

export default AppointmentList;
