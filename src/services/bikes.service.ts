import _axios from "../api/instance";
import type { BikeCase, SearchCount, SearchParams } from "../types/bike";

export const bikeApi = {
  async searchBikeIndex(params: SearchParams) {
    let url = `/search?page=${params.page}&per_page=${params.per_page}&location=Munich&distance=25`;
    if (params.title) url += `&query=${params.title}`;
    if (params.occurred_after)
      url += `&occurred_before=${params.occurred_after}`;
    if (params.occurred_before)
      url += `&occurred_after=${params.occurred_before}`;

    const response = await _axios.get<{ bikes: BikeCase[] }>(url);
    return response.data.bikes;
  },

  async searchBikeIndexCount(params: SearchParams) {
    let url = `/search/count?page=${params.page}&per_page=${params.per_page}&location=Munich&distance=25`;
    if (params.title) url += `&query=${params.title}`;
    if (params.occurred_after)
      url += `&occurred_before=${params.occurred_after}`;
    if (params.occurred_before)
      url += `&occurred_after=${params.occurred_before}`;

    const response = await _axios.get<SearchCount>(url);
    return response.data;
  },
  async getBike(id: string | undefined) {
    const response = await _axios.get<{ bike: BikeCase }>(`/bikes/${id}`);
    return response.data.bike;
  },
};
