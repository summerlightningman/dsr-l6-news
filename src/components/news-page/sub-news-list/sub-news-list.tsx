import {FC, useRef} from 'react';
import NewsContentStyled from "../../styled/news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "../news-paginator/news-paginator";
import {useCookies} from "react-cookie";
import {useAppSelector} from "../../../redux/hooks";
import {NewsPost} from "../../../types/news-post";
import newsService from "../../../redux/services/news/news.service";
import userService from "../../../redux/services/user/user.service";


const AllNewsList: FC = () => {
    const [{token}] = useCookies(['token']);
    const contentRef = useRef<HTMLUListElement>(null);

    const {offset, limit} = useAppSelector(state => state.news);
    const {data: user} = userService.useGetUserInfoQuery(token);
    const {data: newsList, isError, isLoading, isSuccess} = newsService.useGetSubNewsListQuery({
        offset,
        limit,
        token,
        tags: user?.tags || []
    });

    const getContentByStatus = () => {
        if (isLoading)
            return <h2>Loading...</h2>
        if (isError)
            return <h2>Connection error. Try again later.</h2>
        if (isSuccess)
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

    return <NewsContentStyled ref={contentRef}>
        {getContentByStatus()}
    </NewsContentStyled>

};

export default AllNewsList;