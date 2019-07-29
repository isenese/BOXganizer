import React from 'react';
import styled from 'styled-components';

var IndividualBox = ({title}) => (
  <Box>


{title.title}


  </Box>
);


export default IndividualBox;


const Box = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;