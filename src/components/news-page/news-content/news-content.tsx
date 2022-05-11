import {FC, useContext, useState} from 'react';
import {useQuery} from 'react-query';
import NewsContentStyled from "./news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "./news-paginator/news-paginator";
import {getAllNews, QueryParameters} from "../../../http";
import {useCookies} from "react-cookie";
import {NewsPost} from "../news-page.types";
import {NewsContentProps} from "./news-content.types";
import {UserContext} from '../news-page.helpers';

const NewsContent: FC<NewsContentProps> = ({filterByTag}) => {
    const [{token}] = useCookies(['token']);
    const user = useContext(UserContext)
    const [offset, setOffset] = useState(0);
    const limit = 5;
    const queryParams: QueryParameters = {
        limit,
        offset,
        tags: filterByTag ? user.tags.join(',') : undefined
    }
    const {data, isLoading, isSuccess} = useQuery('news', () => getAllNews(token, queryParams));

    const onPrevPageClick = () => setOffset(offset - limit);
    const onNextPageClick = () => setOffset(offset + limit);

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

            <NewsPaginator
                onPrevPageClick={onPrevPageClick}
                onNextPageClick={onNextPageClick}
                isPrevAvailable={offset !== 0}
                isNextAvailable={(offset + limit) < data.news.total}
            />
        </NewsContentStyled>
    }
    if (isLoading)
        return <h1>Loading...</h1>
    else
        return <h1>Error :(</h1>
};

export default NewsContent;