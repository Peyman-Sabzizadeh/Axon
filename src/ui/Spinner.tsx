function Spinner() {
  return (
    <div className="grid aspect-square w-12 animate-spin rounded-full border-4 border-transparent border-r-[#617bd1]">
      <div className="col-start-1 row-start-1 m-[2px] animate-[spin_2s_linear_infinite] rounded-full border-4 border-inherit"></div>
      <div className="col-start-1 row-start-1 m-2 animate-[spin_3s_linear_infinite] rounded-full border-4 border-inherit"></div>
    </div>
  );
}

export default Spinner;
