import { Book } from "./Book";
import { LoadingStatus } from "./Indicators";

export interface InitialStateType {
  books: Book[];
  isLoading: LoadingStatus | null;
  error: string | null;
}
