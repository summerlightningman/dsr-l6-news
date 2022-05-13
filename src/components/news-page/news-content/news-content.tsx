import {FC} from 'react';
import {useQuery} from 'react-query';
import NewsContentStyled from "./news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "./news-paginator/news-paginator";
import {getAllNews, QueryParameters} from "../../../http";
import {useCookies} from "react-cookie";
import {NewsPost} from "../news-page.types";
import {NewsContentProps} from "./news-content.types";
import {useAppSelector} from "../../../redux/hooks";


const NewsContent: FC<NewsContentProps> = ({filterByTag}) => {
    const [{token}] = useCookies(['token']);
    const [{tags}, {offset, limit}] = useAppSelector(state => [state.user, state.news]);


    const queryParams: QueryParameters = {
        limit,
        offset,
        tags: filterByTag ? tags.join(',') : undefined
    }
    const {data, isLoading, isSuccess} = useQuery('news', () => getAllNews(token, queryParams));

    if (isSuccess) {
        return <NewsContentStyled>
            {
                // @ts-ignore
                data.news.list.map(
                    (post: NewsPost) =>
                        <NewsListItem
                            header={post.header}
                            description={post.description}
                            tags={post.tags}
                            key={post.header + post.description + post.tags}
                        />
                )
            }

            <NewsPaginator/>
        </NewsContentStyled>
    }
    if (isLoading)
        return <h1>Loading...</h1>
    else
        return <h1>Error :(</h1>
};

export default NewsContent;