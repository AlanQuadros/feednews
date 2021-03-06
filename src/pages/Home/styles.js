import styled from 'styled-components';
import { Colors } from '../../resources';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  font-family:'Open Sans';
  color: ${Colors.white};
  font-weight: 600;
  font-size: 24px;
`
