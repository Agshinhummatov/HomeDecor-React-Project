import { Toaster } from "react-hot-toast";
import React from "react";

const Notification = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "var(--border-color-gray)",
            },
          },
          error: {
            style: {
              background: "var(--border-color-gray)",
            },
          },
        }}
        position="top-right"
      />
    </>
  );
};

export default Notification;
