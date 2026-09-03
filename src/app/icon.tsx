// src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 96,
  height: 96,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(180deg, #002688 0%, #0053FA 60%, #3BE4FF 100%)",
        backgroundSize: "200% 200%",
        borderRadius: "20px",
        color: "white",
        fontSize: 54,
        fontWeight: 800,
      }}
    >
      A
    </div>,
    {
      ...size,
    },
  );
}
