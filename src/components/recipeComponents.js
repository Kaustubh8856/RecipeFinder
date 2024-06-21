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
  color: rgba(0, 255, 0, 1);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 5px;
  &:hover {
    color: darkgreen;
    transition: 0.2s ease-in-out;
    border: 2px solid darkgreen;
  }
`;
export const SeeMore = styled(Ingredients)`
  border: 2px solid red;
  color: rgba(255, 0, 0, 1);
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    border: 2px solid darkred;
    color: darkred;
  }
`;
