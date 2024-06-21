import styled from "styled-components";

export const Header = styled.div`
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
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const AppIcon = styled.img`
  height: 36px;
  width: 36px;
  margin: 15px;
`;
export const SearchComponent = styled.div`
  display: flex;
  background-color: white;
  padding: 8px;
  width: 40%;
  border-radius: 6px;
  opacity: 90%;
`;
export const SearchIcon = styled.img`
  height: 36px;
  width: 36px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
`;
