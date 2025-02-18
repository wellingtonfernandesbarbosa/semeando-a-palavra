import { useEffect } from "react";

export const useUpdateUrl = (title: string) => {
  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.search.length === 0) {
      url.searchParams.set("", title.replace(/ /g, "_").toLowerCase());
      window.history.replaceState({}, "", url.href);
    }
  }, [title]);
};
