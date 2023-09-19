import { useMemo, useState } from "react";
import style from "./BookCard.module.scss";
import ImgDisplay from "../../atoms/img-display";
import TextDisplay from "../../atoms/text-display";
import { BookCardProps } from "../../../types/BookCardTypes";

const BookCard: React.FC<BookCardProps> = ({
  link,
  title,
  category,
  authors,
}) => {
  // const renderAuthors = useMemo(() => {
  //   return authors.map((el, index) => <p key={`${el}_${index}`}>{el}</p>);
  // }, [authors]);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__content}>
        <ImgDisplay link={link} />
        <div className={style.text__container}>
          <TextDisplay>{category ? category[0] : ""}</TextDisplay>
          <TextDisplay>{title}</TextDisplay>
          <TextDisplay>{authors[0]}</TextDisplay>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
