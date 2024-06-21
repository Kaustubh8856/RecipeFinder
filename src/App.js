import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  font-weight: bold;
  font-size: 25px;
  box-shadow: 0 3px 6px #555;
`;
const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
const AppIcon = styled.img`
  height: 36px;
  width: 36px;
  margin: 15px;
`;
const SearchComponent = styled.div`
  display: flex;
  background-color: white;
  padding: 8px;
  width: 40%;
  border-radius: 6px;
  opacity: 90%;
`;
const SearchIcon = styled.img`
  height: 36px;
  width: 36px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
`;

function App() {
  return (
    <Container className="App">
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" alt="burger" /> Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" alt="search" />
          <SearchInput type="text" placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
    </Container>
  );
}

export default App;
