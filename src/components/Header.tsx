import { styled } from "styled-components";
import AppLogo from "./common/Logo";
const HeaderRoot = styled.header`
  height: 88px;
  padding: 12px 0;
  border-bottom: 2px solid #e0e0e0;
`;

const Nav = styled.div`
  & > span:not(:first-child) {
    margin-left: 16px;
  }
`;

const Header = () => {
  return (
    <div className="h-16 py-3 px-0 border-b-2 border-solid border-teal-300	">
      <div className="px-3 justify-between flex">
        <div className="h-8 align-middle inline">
          <AppLogo />
        </div>
        <div className="h-8 align-middle inline"></div>
      </div>
    </div>
  );
};

export default Header;
