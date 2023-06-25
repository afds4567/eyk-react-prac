import { styled } from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

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
      <Header />
      <ContentWrapper>
        <ListContainer>
          <List />
        </ListContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </ContentWrapper>
    </>
  );
};
export default App;
