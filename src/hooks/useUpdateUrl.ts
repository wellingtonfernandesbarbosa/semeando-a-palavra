import sanitizeString from "@/utils/sanitizeStrings";
import { useEffect } from "react";

export const useUpdateUrl = (title: string) => {
  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.search.length === 0) {
      url.searchParams.set("", sanitizeString(title));
      window.history.replaceState({}, "", url.href);
    }
  }, [title]);
};