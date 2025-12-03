import styled from "styled-components";
import { Container } from "../ui/container";
import { Link } from "react-router-dom";
const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

  a {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/bikes">Munich Bike Thefts</Link>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
