import styled from 'styled-components';

export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Buttons key={option} onClick={() => onClickFeedback(option)}>
          {option}
        </Buttons>
      ))}
    </div>
  );
};
const Buttons = styled.button`
  background-color: gray;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 8px 4px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
  }
`;
