import React from 'react';
import { Row, Separator } from '../../components';
import { 
  Container,
  SourceName,
  NewsTitle,
  Descriptions,
  PublisherDate,
  NewsCover,
  Wrapper,
} from './styles';
import dayjs from 'dayjs'

function News({article}) {
  return (
    <Container onClick={() => window.open(article.url , "_blank")}>
      <Row>
        <Wrapper>
          <SourceName>{article.source.name}</SourceName>
          <Separator y={16} />
          <NewsTitle>{article.title}</NewsTitle>
          <Separator y={6} />
          <Descriptions>{article.description}</Descriptions>
          <Separator y={51} />
          <PublisherDate>Publicado em: {dayjs(article.publishedAt).format('DD/MM/YYYY')}</PublisherDate>
        </Wrapper>
        <Separator x={30} />
        { article.urlToImage && <NewsCover image={article.urlToImage}/> }      
      </Row>      
    </Container>
  );
}

export default News;