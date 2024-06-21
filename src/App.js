import styled from "styled-components";
import {
  Header,
  SearchComponent,
  SearchIcon,
  SearchInput,
  AppNameComponent,
  AppIcon,
} from "./components/headerComponents";

import {
  RecipeListContainer,
  RecipeContainer,
  Ingredients,
  SeeMore,
  CoverImage,
  RecipeName,
} from "./components/recipeComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src="hamburger.svg" alt="" />
          <RecipeName>Recipe Name </RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMore>See complete recipe</SeeMore>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}

export default App;
