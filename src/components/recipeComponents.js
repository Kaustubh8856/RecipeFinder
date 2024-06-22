import styled from "styled-components";
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;
`;
export const RecipeContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  box-shadow: 0 0 15px lightgray;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 18px gray;
    transform: scale(1.02);
  }
`;
export const CoverImage = styled.img`
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
  color: black;
`;
export const Ingredients = styled.span`
  font-size: 18px;
  border: 2px solid green;
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: darkgreen;
  border-radius: 5px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: rgba(0, 255, 0, 1);
    border: 2px solid darkgreen;
  }
`;
export const SeeMore = styled(Ingredients)`
  border: 2px solid red;
  transition: 0.2s ease-in-out;
  color: darkred;
  &:hover {
    transition: 0.2s ease-in-out;
    border: 2px solid darkred;
    color: rgba(255, 0, 0, 1);
  }
`;

export const RecipeComponent = (props) => {
  const { recipeObj } = props;
  return (
    <RecipeContainer>
      <CoverImage src={recipeObj.image}></CoverImage>
      <RecipeName>{recipeObj.label}</RecipeName>
      <Ingredients>Ingredients</Ingredients>
      <SeeMore onClick={()=> window.open(recipeObj.url)}>See Full Recipe</SeeMore>
    </RecipeContainer>
  );
};
