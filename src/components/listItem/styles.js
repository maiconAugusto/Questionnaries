import styled from 'styled-components/native';

export const Card = styled.View.attrs({
  shadowColor: '#c3c3c3',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 4.25,
  shadowRadius: 1.84,

  elevation: 1,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 50px;
  margin: 4px 8px 2px 8px;
  border-radius: 8px;
  background-color: white;
`;
