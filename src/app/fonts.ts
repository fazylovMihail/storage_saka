import localFont from "next/font/local";

export const fonts = localFont({
  src: [
    {
      path: "../assets/fonts/IBMPlexSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBMPlexSans-Bold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});
