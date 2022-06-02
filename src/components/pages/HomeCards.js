import AppButton from "../ui/AppButton";
import ListUpdateHoc from "../hocs/ListUpdateHoc";
import CommentList from "./CommentList";
import ReviewList from "./ReviewList";

const CommentListComponent = ListUpdateHoc(
    CommentList,
    (DataSource) => DataSource.source1
)

const ReviewListComponent = ListUpdateHoc(
    ReviewList,
    (DataSource) => DataSource.source2
)

const HomeCards = () => {
    return (
        <>
            <div>
                <div>Home Cards</div>
                <AppButton isLarge>111</AppButton>
            </div>
            <div>
                <CommentListComponent/>
                <ReviewListComponent/>
            </div>
        </>
    )
}

export default HomeCards