import api , {endpoints} from './index'

export async function getTopHeadlines() {
  const { get } = await api
  return get(endpoints.topHeadlines)
}