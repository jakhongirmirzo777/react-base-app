import AppButton from "../ui/AppButton";
import ListUpdateHoc from "../hocs/ListUpdateHoc";
import CommentList from "./CommentList";
import ReviewList from "./ReviewList";
import React, {useRef} from "react";

const CommentListComponent = ListUpdateHoc(
    CommentList,
    (DataSource) => DataSource.source1
)

const ReviewListComponent = ListUpdateHoc(
    ReviewList,
    (DataSource) => DataSource.source2
)

const HomeCards = () => {
    const commentRef = useRef(null)
    const logCommentRef = () => {
        console.log(commentRef)
    }

    return (
        <>
            <div>
                <div>Home Cards</div>
                <AppButton isLarge>111</AppButton>
            </div>
            <div>
                <CommentListComponent
                    ref={commentRef}
                    greeting='Hiiiiii'
                    onClick={logCommentRef}/>
                <ReviewListComponent greeting='Helloooo'/>
            </div>
        </>
    )
}

export default HomeCards