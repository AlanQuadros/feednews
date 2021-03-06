import styled from 'styled-components';
import { Colors } from '../../resources';

export const Container = styled.div`
  width: 570px;
  background: ${Colors.darkGrey};
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`

export const SourceName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.grey};
`

export const NewsTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${Colors.grey};
`

export const Descriptions = styled.span`
  font-size: 9px;
  color: ${Colors.grey};
`

export const PublisherDate = styled.span`
  font-size: 9px;
  color: ${Colors.grey};
`
export const NewsCover = styled.div`
  min-width: 151px;
  height: 151px;
  border: 1px solid ${Colors.grey};
  background: ${({ image }) => `url('${image}')`} no-repeat center;
  background-size: cover;
`;