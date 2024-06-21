import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-weight: bold;
  font-size: 25px;
  box-shadow: 0 3px 6px #555;
`;

function App() {
  return (
    <Container className="App">
      <Header>Recipe </Header>
    </Container>
  );
}

export default App;
