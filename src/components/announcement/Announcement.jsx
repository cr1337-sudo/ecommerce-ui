import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:14px;
  font-weight:500;
`;

const Announcement = () => {
  return <Container>Super deal! Free shipping in orders over $50</Container>;
};

export default Announcement;
