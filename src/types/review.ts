import { ReviewUserType } from './review-user';

type ReviewType = {
  id: string;
  date: string;
  user: ReviewUserType;
  comment: string;
  rating: number;
};

export type {ReviewType};
