import styled, { css } from 'styled-components';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 86px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.02s ease;
  user-select: none;
  text-decoration: none;
  outline: none;
  border: 2px solid transparent;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled.button`
  ${baseStyles}
  background-color: #4E71FE;
  color: #ffffff;

  &:hover {
    background-color: #3f63fd;
  }
`;

export const OutlineButton = styled.button`
  ${baseStyles}
  background-color: #ffffff;
  color: #4E71FE;
  border-color: #4E71FE;

  &:hover {
    background-color: #f5f8ff;
  }
`;

export default PrimaryButton;


