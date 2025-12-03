import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/use-debounce";
import type { SearchParams } from "../types/bike";
import { PER_PAGE } from "../lib/constants";
import { useSearchBikes, useSearchBikesCount } from "../hooks/query/use-bikes";
import { Container } from "../components/ui/container";
import Space from "../components/ui/space";
import Filters from "../components/bike/filters";
import { Badge } from "../components/ui/badge";
import BikeList from "../components/bike/bike-list";
import Pagination from "../components/ui/pagination";

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
  const handleDateFrom = (v: string | undefined) => setDateFrom(v);
  const handleDateTo = (v: string | undefined) => setDateTo(v);

  useEffect(() => {
    if (page > 1) setPage(1);
  }, [debouncedSearch, dateFrom, dateTo]);

  return (
    <Container className="spacing">
      <Space size={16}>
        <Filters
          query={query}
          handleSearch={handleSearch}
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFrom={handleDateFrom}
          onDateTo={handleDateTo}
        />
        <Badge>Total cases: {countsLoading ? "..." : total}</Badge>

        <BikeList
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
  );
}

export default Bikes;
