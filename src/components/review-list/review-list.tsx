import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review-item/review-item';
import { reviews } from '../../mocks/reviews';


const ReviewList = (): JSX.Element => {
  const reviewsSorted = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsSorted.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <CommentForm />
    </section>
  );
};

export default ReviewList;
