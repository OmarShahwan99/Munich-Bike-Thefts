export interface BikeCase {
  id: number;
  title: string;
  description: string | null;
  date_stolen: number | null;
  date_reported: string | null;
  stolen_location: string | null;
  large_img?: string | null;
  frame_colors: string[];
  public_images: { id: number; large: string; name: string }[];
  stolen: boolean;
  manufacturer_name: string;
  frame_model: string;
  year: string;
  serial: string | null;
  type_of_cycle: string;
  propulsion_type_slug: string;
  stolen_coordinates: number[];
}

export interface SearchCount {
  for_sale: number;
  non: number;
  proximity: number;
  stolen: number;
}

export type SearchParams = {
  page?: number;
  per_page?: number;
  title?: string;
  occurred_before?: string;
  occurred_after?: string;
};
