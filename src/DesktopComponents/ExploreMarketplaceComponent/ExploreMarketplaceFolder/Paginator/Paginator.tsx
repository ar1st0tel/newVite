import React from "react";


export type PaginatorProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean;
        right: boolean;
    }
    nav?: {
        current: number;
        total: number
    }
}

const Pagination = (props: PaginatorProps) => {
    const {nav = null, onPrevPageClick, onNextPageClick, disable} = props;
    const handleNextPageClick = () => {onNextPageClick()};
    const handlePrevPageClick = () => {onPrevPageClick()};
    return (
        <div>
            <button onClick={handlePrevPageClick} disabled={disable.left}>{`<`}</button>
            {nav && (
                <span>{nav.current}/{nav.total}</span>
            )}
            <button onClick={handleNextPageClick} disabled={disable.right}>{`>`}</button>
        </div>
    )
}
export default React.memo(Pagination)