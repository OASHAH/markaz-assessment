import React from "react";
import { Toaster } from "react-hot-toast";

export default function Layout({ children, pageProps }: any) {
  if (pageProps?.fullView) {
    return <main>{children}</main>;
  }
  return (
    <div>
      <div className="flex">
        <div className="w-5/6">
          <main>{children}</main>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}
