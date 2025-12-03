import { useQuery } from "@tanstack/react-query";
import type { SearchParams } from "../../types/bike";
import { queryKeys } from "../../lib/query-keys";
import { bikeApi } from "../../services/bikes.service";

export const useSearchBikes = (params: SearchParams) => {
  return useQuery({
    queryKey: [queryKeys.BIKES, params],
    queryFn: () => bikeApi.searchBikeIndex(params),
  });
};

export const useSearchBikesCount = (params: SearchParams) => {
  return useQuery({
    queryKey: [queryKeys.BIKES_COUNT, params],
    queryFn: () => bikeApi.searchBikeIndexCount(params),
  });
};

export const useBike = (id: string | undefined) => {
  return useQuery({
    queryKey: [queryKeys.BIKE, id],
    queryFn: () => bikeApi.getBike(id),
    enabled: !!id,
  });
};
