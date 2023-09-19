import { useMemo } from "react";
import { useAppSelector } from "../../../helpers/hooks/reduxHooks";
import BookCard from "../../molecules/book-card";
import { BookCardProps } from "../../../types/BookCardTypes";
import style from "./BooksBlock.module.scss";

const BooksBlock: React.FC = () => {
  const books = useAppSelector((state) => state.books);

  const renderBooks = useMemo(() => {
    return books?.map((el) => (
      <BookCard
        key={el.id}
        title={el.volumeInfo.title}
        category={el.volumeInfo.categories}
        authors={el.volumeInfo.authors}
        link={el.volumeInfo.imageLinks.smallThumbnail}
      />
    ));
  }, [books]);
  return <div className={style.wrapper}>{renderBooks}</div>;
};

export default BooksBlock;
