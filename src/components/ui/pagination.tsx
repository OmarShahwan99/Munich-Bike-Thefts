import React from "react";
import Space from "./space";
import { Button } from "./button";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  disabled?: boolean;
}

const Pagination = ({
  page,
  setPage,
  isLoading,
  disabled,
}: PaginationProps) => {
  const handleNext = () => {
    setPage((p) => p + 1);
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  };
  return (
    <Space
      direction="horizontal"
      style={{
        justifyContent: "center",
      }}
    >
      {" "}
      <Button onClick={handlePrev} disabled={page === 1 || isLoading}>
        {" "}
        Previous{" "}
      </Button>{" "}
      <div style={{ alignSelf: "center" }}>Page {page}</div>{" "}
      <Button onClick={handleNext} disabled={isLoading || disabled}>
        {" "}
        Next{" "}
      </Button>{" "}
    </Space>
  );
};

export default Pagination;
