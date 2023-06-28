import { ThemeProvider, styled } from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { theme } from "./themes";
import Dropdown from "./components/common/DropDown";
import KaKaoMap from "./components/KaKaoMap";

const DropdownWrapper = styled.div`
  width: 30%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListContainer = styled.div`
  flex: 1;
`;

const MapContainer = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    flex: 2;
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <DropdownWrapper>
          <Dropdown
            placeholder="hello"
            isOpen={true}
            options={["a", "b", "c"]}
          />
        </DropdownWrapper> */}
        <ContentWrapper>
          <ListContainer>
            <List />
          </ListContainer>
          <MapContainer>
            <KaKaoMap />
          </MapContainer>
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
};
export default App;
