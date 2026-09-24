import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
        background: "#fff4ea",
      }}
    >
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ff5a36" }} />
    </div>,
    size,
  );
}
