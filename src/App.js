import styled from "styled-components";
import axios from "axios";
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
  RecipeComponent,
  RecipeContainer,
  Ingredients,
  SeeMore,
  CoverImage,
  RecipeName,
} from "./components/recipeComponents";
import { useState } from "react";

const AppId = "7a2ce9eb";
const AppKey = "e3a1b9ae80ca43b3744f44926f9a3e82";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

function App() {
  const [timeOutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${AppId}&app_key=${AppKey}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChnage = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => {
      fetchRecipe(e.target.value);
    }, 500);
    updateTimeOutId(timeOut);
  };
  return (
    <Container className="App">
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg" alt="burger" /> Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" alt="search" />
          <SearchInput
            onChange={onTextChnage}
            type="text"
            placeholder="Search Recipe"
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length &&
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
