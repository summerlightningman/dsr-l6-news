import {FC, useState} from 'react';
import {useQuery} from 'react-query';
import NewsContentStyled from "./news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "./news-paginator/news-paginator";
import {getAllNews} from "../../../http";
import {useCookies} from "react-cookie";
import {NewsPost} from "../news-page.types";
import {NewsContentProps} from "./news-content.types";

const NewsContent: FC<NewsContentProps> = ({filterByTag}) => {
    const [{token}] = useCookies(['token']);
    const [offset, setOffset] = useState(0);
    const limit = 5;
    const {data, isLoading, isSuccess} = useQuery('news', () => getAllNews(token, offset, limit));

    const onPrevPageClick = () => setOffset(offset - limit);
    const onNextPageClick = () => setOffset(offset + limit);

    if (isSuccess) {
        return <NewsContentStyled>
            {
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