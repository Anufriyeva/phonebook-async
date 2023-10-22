import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #35abde;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0c7fb0;
  }
`;