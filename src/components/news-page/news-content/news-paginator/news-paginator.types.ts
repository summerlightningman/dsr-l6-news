export interface NewsPaginatorProps {
    onPrevPageClick: () => void,
    onNextPageClick: () => void,
    isNextAvailable: boolean,
    isPrevAvailable: boolean
}