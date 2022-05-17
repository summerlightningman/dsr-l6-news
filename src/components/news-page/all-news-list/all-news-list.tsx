import {FC, useRef} from 'react';
import NewsContentStyled from "../../styled/news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "../news-paginator/news-paginator";
import {useCookies} from "react-cookie";
import {useAppSelector} from "../../../redux/hooks";
import {NewsPost} from "../../../types/news-post";
import newsService from "../../../redux/services/news/news.service";


const AllNewsList: FC = () => {
    const [{token}] = useCookies(['token']);
    const contentRef = useRef<HTMLUListElement>(null);

    const {offset, limit} = useAppSelector(state => state.news);
    const {data: newsList, status} = newsService.useGetAllNewsListQuery({
        offset,
        limit,
        token
    });

    const getContentByStatus = () => {
        switch (status) {
            case 'pending':
                return <h2>Loading...</h2>
            case 'rejected':
                return <h2>Connection error. Try again later.</h2>
            case 'fulfilled':
                return <>
                    {newsList?.map(
                        (post: NewsPost) =>
                            <NewsListItem
                                header={post.header}
                                description={post.description}
                                tags={post.tags}
                                key={post.header + post.description + post.tags}
                            />
                    )}
                    <NewsPaginator/>
                </>
        }
    }

    return <NewsContentStyled ref={contentRef}>
        {getContentByStatus()}
    </NewsContentStyled>

};

export default AllNewsList;