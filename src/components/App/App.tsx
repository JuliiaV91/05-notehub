import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";

export default function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      fetchNotes({
        page: 1,
      }),
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* SearchBox */}
        {/* Pagination */}
        {/* Кнопка створення нотатки */}
      </header>

      {isLoading && <p>Loading notes...</p>}

      {isError && <p>Something went wrong.</p>}

      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </div>
  );
}
