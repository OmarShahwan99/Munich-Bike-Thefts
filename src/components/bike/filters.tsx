import styled from "styled-components";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SearchField from "../ui/search-input";
import { FiX } from "react-icons/fi";
import { Tooltip } from "../ui/tooltip";

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
  flex-wrap: wrap;
`;
export default function Filters({
  query,
  handleSearch,
  dateFrom,
  dateTo,
  onDateFrom,
  onDateTo,
}: {
  query: string;
  handleSearch: (v: string) => void;
  dateFrom: string | undefined;
  dateTo: string | undefined;
  onDateFrom: (v: string | undefined) => void;
  onDateTo: (v: string | undefined) => void;
}) {
  const handleReset = () => {
    onDateFrom(undefined);
    onDateTo(undefined);
    handleSearch("");
  };

  const filtersApplied = Boolean(query || dateFrom || dateTo);

  return (
    <Row>
      <SearchField
        query={query}
        onSearch={handleSearch}
        placeholder="Search By Title"
      />
      <label>
        From
        <Input
          type="date"
          value={dateFrom ?? ""}
          onChange={(e) => onDateFrom(e.target.value || undefined)}
        />
      </label>

      <label>
        To
        <Input
          type="date"
          value={dateTo ?? ""}
          onChange={(e) => onDateTo(e.target.value || undefined)}
        />
      </label>

      {filtersApplied && (
        <Tooltip content="Clear filters">
          <Button onClick={handleReset} variant="ghost">
            <FiX />
          </Button>
        </Tooltip>
      )}
    </Row>
  );
}
