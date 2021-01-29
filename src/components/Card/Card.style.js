import styled from 'styled-components';


// enum Position {
//   absolute = 'absolute',
//   fixed = 'fixed',
//   relative = 'relative',
//   unset = 'unset',
//   static = 'static',
//   sticky = 'sticky',
// }

// const StyledText = styled(Text)`
//   text-decoration: none;
// `;

const TitleStyle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const BoxStyle = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background-color: powderblue;
  z-index: 1000;
`;
export { TitleStyle, BoxStyle };
