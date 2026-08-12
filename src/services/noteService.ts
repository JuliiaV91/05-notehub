import axios from "axios";
import type { Note } from "../types/note";

const API_URL = "https://notehub-public.goit.study/api";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  page: number;
  search?: string;
}

export const fetchNotes = async ({
  page,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(`${API_URL}/notes`, {
    params: {
      page,
      perPage: 12,
      search,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
