import { useState } from "react";
import Arrow from "../../atoms/arrow";
import style from "./Select.module.scss";
import { SelectProps } from "../../../types/SelectTypes";
import TextDisplay from "../../atoms/text-display";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Select: React.FC<SelectProps> = ({
  options,
  queryData,
  label,
  handleSearch,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  const setQueryParams = (option: string) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set(queryData, option);

    const newSearch = queryParams.toString();
    const newPath = `${location.pathname}?${newSearch}`;
    navigate(newPath, { replace: true });
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsActive(false);
    setQueryParams(option);
    handleSearch();
  };

  return (
    <div className={style.custom__select} onClick={toggleDropdown}>
      <TextDisplay>{label}</TextDisplay>
      <div className={`${style.select__header} ${isActive ? style.open : ""}`}>
        {selectedOption ? selectedOption : "Select an option"}
        <Arrow isActive={isActive} />
      </div>
      <div className={`${style.dropdown} ${isActive ? style.open : ""}`}>
        <ul>
          {options.map((option, key) => (
            <li
              key={`${option}_${key}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
