import FilterStatusButton from "./FilterStatusButton";

const FilterStatus = () => {
  return (
    <>
      <div className="flex justify-between items-center w-1/2">
        <div>
          <FilterStatusButton value="all">SVE</FilterStatusButton>
          <FilterStatusButton value="active">AKTIVNO</FilterStatusButton>
          <FilterStatusButton value="done">REŠENO</FilterStatusButton>
        </div>
      </div>
    </>
  );
};

export default FilterStatus;
