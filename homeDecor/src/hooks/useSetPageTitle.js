import React, { useEffect } from "react";

export const useSetPageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
