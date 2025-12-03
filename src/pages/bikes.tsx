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
import { useSearchParams } from "react-router-dom";

function Bikes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => Number(searchParams.get("page") || 1));

  const [filters, setFilters] = useState({
    query: searchParams.get("query") || "",
    dateFrom: searchParams.get("dateFrom") || undefined,
    dateTo: searchParams.get("dateTo") || undefined,
  });

  // debounce search
  const debouncedSearch = useDebounce(filters.query);

  const apiParams: SearchParams = {
    page,
    per_page: PER_PAGE,
    title: debouncedSearch,
    occurred_before: filters.dateTo,
    occurred_after: filters.dateFrom,
  };

  const { data: bikes, isLoading, error } = useSearchBikes(apiParams);

  const countParams = {
    ...apiParams,
    page: 1,
    per_page: 1,
  };

  const { data: bikesCount, isLoading: countsLoading } =
    useSearchBikesCount(countParams);

  const total = bikesCount?.stolen ?? 0;
  const handleSearch = (v: string) => setFilters((f) => ({ ...f, query: v }));

  const handleDateFrom = (v: string | undefined) =>
    setFilters((f) => ({ ...f, dateFrom: v }));

  const handleDateTo = (v: string | undefined) =>
    setFilters((f) => ({ ...f, dateTo: v }));

  useEffect(() => {
    const params: any = {};

    if (filters.query) params.query = filters.query;
    if (filters.dateFrom) params.dateFrom = filters.dateFrom;
    if (filters.dateTo) params.dateTo = filters.dateTo;

    params.page = page.toString();

    setSearchParams(params);
  }, [filters, page]);

  useEffect(() => {
    if (debouncedSearch || filters.dateFrom || filters.dateTo) setPage(1);
  }, [debouncedSearch, filters.dateFrom, filters.dateTo]);

  return (
    <Container className="spacing">
      <Space size={16}>
        <Filters
          query={filters.query}
          handleSearch={handleSearch}
          dateFrom={filters.dateFrom}
          dateTo={filters.dateTo}
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
