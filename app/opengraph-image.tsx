import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Full Stack Developer in Berlin`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 90px",
        background: "#fff4ea",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          top: -120,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "#ff5a36",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 120,
          bottom: -90,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "#ffc53d",
        }}
      />
      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#1d5f8a",
        }}
      >
        Portfolio
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: -3,
          color: "#23160f",
        }}
      >
        {site.name}
      </div>
      <div style={{ marginTop: 14, fontSize: 38, color: "#6b5446" }}>
        {`${site.role} · ${site.location}`}
      </div>
    </div>,
    size,
  );
}
