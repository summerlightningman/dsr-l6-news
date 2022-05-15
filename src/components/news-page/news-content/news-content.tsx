import {FC, useEffect, useRef} from 'react';
import NewsContentStyled from "../../styled/news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "./news-paginator/news-paginator";
import {useCookies} from "react-cookie";
import {NewsPost} from "../news-page.types";
import {NewsContentProps} from "./news-content.types";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import fetchNewsList from "../../../redux/slices/news/fetch-news-list.thunk";
import {setLimit} from "../../../redux/slices/news/news.slice";


const NewsContent: FC<NewsContentProps> = ({filterByTag}) => {
    const dispatch = useAppDispatch();
    const [{token}] = useCookies(['token']);
    const contentRef = useRef<HTMLUListElement>(null);

    const [{tags}, {list, offset, limit}] = useAppSelector(state => [state.user, state.news]);

    useEffect(() => {
        if (contentRef.current) {
            const newsCount = Math.floor(contentRef.current.offsetHeight / 150);
            dispatch(setLimit(newsCount));
        }
        const tagList = filterByTag ? tags.join(',') : undefined;
        dispatch(fetchNewsList({token, limit, offset, tags: tagList}));
    }, [dispatch, filterByTag, limit, offset, tags, token]);

    return <NewsContentStyled ref={contentRef}>
        {
            list.map(
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

};

export default NewsContent;