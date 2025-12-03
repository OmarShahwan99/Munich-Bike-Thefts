import styled from "styled-components";
import { FiSearch, FiX } from "react-icons/fi";
import { Input } from "./input";

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

interface FilterProps {
  query: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export default function SearchField({
  query,
  onSearch,
  placeholder,
}: FilterProps) {
  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder={placeholder ?? "Search..."}
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
      {query && (
        <IconWrapper onClick={() => onSearch("")}>
          <FiX />
        </IconWrapper>
      )}
      {!query && <FiSearch style={{ position: "absolute", right: 10 }} />}
    </SearchWrapper>
  );
}
