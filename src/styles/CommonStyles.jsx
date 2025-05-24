import { styled } from "speedy-jsx";
import { fadeIn } from "./GlobalStyles";

export const Container = styled.div`
  text-align: center;
  padding: 30px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  animation: ${fadeIn} 0.6s ease;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
`;

export const CountDisplay = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  margin-left: 10px;
  background-color: ${(props) => {
    if (props.status === "正数") return "#4caf50";
    if (props.status === "负数") return "#f44336";
    return "#ffc107";
  }};
  color: white;
  animation: ${fadeIn} 0.3s ease;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const DecrementButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(244, 67, 54, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(244, 67, 54, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(244, 67, 54, 0.4);
  }
`;

export const IncrementButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(76, 175, 80, 0.4);
  }
`;

export const ResetButton = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(33, 150, 243, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(33, 150, 243, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(33, 150, 243, 0.4);
  }
`;

export const NavButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  margin: 10px 5px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(33, 150, 243, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(33, 150, 243, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(33, 150, 243, 0.4);
  }
`;
