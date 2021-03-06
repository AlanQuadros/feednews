import React, {useEffect} from 'react';
import { Container, Title } from './styles';
import { Separator, News } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { requestTopHeadlines } from '../../store/ducks/topHeadlines';

function Home() {
  const data = useSelector(({topHeadlinesState}) => topHeadlinesState.data)
  const loading = useSelector(({topHeadlinesState}) => topHeadlinesState.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestTopHeadlines())
  }, [dispatch])

  if (loading) {
    return <Title>{'Edmar gay'}</Title>
  }

  return (
    <Container>
      <Separator y={20} />
      <Title>{'FeedNews'}</Title>
      <Separator y={57} />
      {data.articles && data.articles.map((article, index) => (
        <News key={index} article={article}/>
      ))}    
      <Separator y={15} />
    </Container>
  );
}

export default Home;