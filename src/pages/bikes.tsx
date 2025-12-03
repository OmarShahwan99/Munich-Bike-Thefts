import { useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../hooks/use-debounce";
import type { SearchParams } from "../types/bike";
import { PER_PAGE } from "../lib/constants";
import { useSearchBikes, useSearchBikesCount } from "../hooks/query/use-bikes";
import { Container } from "../components/ui/container";
import Space from "../components/ui/space";
import Filters from "../components/theft/filters";
import { Badge } from "../components/ui/badge";
import TheftList from "../components/theft/theft-list";
import Pagination from "../components/ui/pagination";

const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

function Bikes() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState<string>();
  const [dateTo, setDateTo] = useState<string>();

  // debounce search
  const debouncedSearch = useDebounce(query);

  const params: SearchParams = {
    page,
    per_page: PER_PAGE,
    title: debouncedSearch,
    occurred_before: dateTo,
    occurred_after: dateFrom,
  };

  const { data: bikes, isLoading, error } = useSearchBikes(params);

  const countParams = {
    page: 1,
    per_page: 1,
    title: debouncedSearch,
    occurred_before: dateTo,
    occurred_after: dateFrom,
  };

  const { data: bikesCount, isLoading: countsLoading } =
    useSearchBikesCount(countParams);

  const total = bikesCount?.stolen ?? 0;

  const handleSearch = (v: string) => setQuery(v);

  return (
    <Content>
      <Container>
        <Space size={16}>
          <Filters
            query={query}
            handleSearch={handleSearch}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onDateFrom={(d) => setDateFrom(d)}
            onDateTo={(d) => setDateTo(d)}
          />
          <Badge>Total cases: {countsLoading ? "..." : total}</Badge>

          <TheftList
            bikes={bikes}
            loading={isLoading}
            error={error?.message}
            emptyMessage={"No thefts found for the provided filters."}
          />
          <Pagination
            page={page}
            setPage={setPage}
            isLoading={isLoading}
            disabled={bikes && bikes.length < PER_PAGE}
          />
        </Space>
      </Container>
    </Content>
  );
}

export default Bikes;
