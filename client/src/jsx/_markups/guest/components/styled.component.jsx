import styled from "styled-components";
import UIColors from "./colors";

export const FieldGroup = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  /* box-shadow: 0 0 0px 1px #acacac; */
  border: 1px solid #acacac;
  overflow: hidden;
  border-radius: 4px;
  .field__input {
    flex: auto;
    padding: 8px 12px;
    min-width: 0;
    user-select: none;
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
  .field__addon {
    display: inline-flex;
    padding: 8px;
    /* font-weight: bold; */
    color: #464444;
  }
`;

export const Selector = styled("select")`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 9px;
  border: 1px solid transparent;
  align-items: center;
  cursor: pointer;
  /* padding: 0 10px; */
  box-sizing: border-box;
  display: block;
  width: 100%;
  /* max-width: 300px; */
  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const StyledSelector = styled("div")`
  select {
    ${Selector}
    appearance: none;
    width: 100%;
    max-width: 100%;
    display: block;
    background-color: transparent;
    box-shadow: 0 5px 20px -1px rgba(0, 0, 0, 15%);
    border-radius: 8px;
    &:focus {
    }
  }
`;

export const MiscContainer = styled("div")`
  min-height: 200px;
  max-height: 250px;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ededed;
  font-size: 12px;
  .misc {
    background: white;
    .header {
      padding: 8px;
      border-bottom: 1px solid #ededed;
      .title {
        font-weight: bold;
        line-height: 1;
      }
    }
    .description {
      padding: 8px;
    }
  }
`;

export const StyledSection = styled.section`
  ${(props) => !props.plain && "box-shadow: 0 0 1px 0 #888"};
  border-radius: 8px;
  padding: 15px;
`;

export const DecimalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  list-style-type: decimal;
  list-style-position: inside;
  li {
    list-style-type: inherit;
  }
`;

export const WizardForm = styled.form`
  padding: 30px 0;
  max-width: 769px;
  width: 100%;
  flex: 1;
`;

export const Cage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* padding: 8px 0; */
`;

export const StyledSwitch = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 20px -10px rgb(0 0 0 / 15%);
  border-radius: 10px;
  /* overflow: hidden; */
  /* width: 100%; */
  padding: 0;
  /* border-bottom: 1px solid #ededed; */
  .switch-part {
    cursor: pointer;
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 8px;
    border-radius: inherit;
    input[type="radio"] {
      position: absolute;
      display: block;
      text-align: center;
      opacity: 0;
      ~ span {
        opacity: 0.5;
        padding: 16px 20px;
        display: inline-flex;
        justify-content: center;
        width: 100%;
        border-radius: inherit;
      }
      &:checked ~ span {
        font-weight: bold;
        color: #0059ff;
        opacity: 1;
        box-shadow: 0 5px 20px -1px rgba(0, 0, 0, 15%);
      }
    }
  }
`;

export const StyledPriceInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 15%);
  overflow: hidden;

  /* &:focus,
  &:focus-within {
    box-shadow: 0 0 2px 3px rgba(89, 89, 89, 30%);
  } */
  /* padding-left: 8px; */
  > input {
    display: block;
    flex: 1 auto;
    width: auto;
    min-width: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    box-sizing: border-box;
    /* max-width: 70%; */

    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
    &:invalid {
      box-shadow: inset 0 0 2px 3px rgba(255, 89, 89, 30%);
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  > button {
    padding: 8px 20px;
    display: block;
    border: none;
    font-size: 18px;
    &:active {
      background: #ededed;
    }
  }
  > .buttons {
    display: flex;
    /* flex: 1 auto; */
    position: relative;
    overflow: hidden;
    border-left: 1px solid rgba(0, 0, 0, 15%);
  }
`;

export const StyleInput = styled.input`
  // display: block;
  // flex: 1 auto;
  // width: auto;
  // min-width: 0;
  // padding-top: 6px;
  // padding-bottom: 6px;
  // padding-left: 8px;
  // box-sizing: border-box;
`;

export const StyledTabParent = styled("section")`
  border: none !important;
  padding: 0 !important;
`;

export const NumberInput = styled("div")`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const StyledCard = styled.section`
  box-shadow: 0 2px 10px -5px #b6b6b698;
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-top: 1px solid ${UIColors.gray};
  thead {
    border-bottom: 1px solid ${UIColors.gray};
  }
  tr {
    th,
    td {
      padding: 10px;
      min-width: 250px
    }
  }
`;

export const StyledIcon = styled.figure`
  width: ${(props) => (props.small ? "20px" : "30px")};
`;

export const StyledTabButton = styled.button`
  border: none;
  padding: 10px 12px;
  border-radius: 8px;
  &.on {
    background-color: aliceblue;
  }
`;
