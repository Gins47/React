import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/linkedin.png" />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100%;
`;
const Content = styled.div`
displaz:flex;
align-item:center;
min-height:100%,
max-width: 128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
export default Header;
