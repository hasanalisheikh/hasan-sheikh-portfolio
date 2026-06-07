import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1424 0%, #0a0a1a 60%, #061018 100%)",
          borderRadius: "14px",
          position: "relative",
        }}
      >
        {/* Cyan glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-8px",
            left: "-8px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(0, 212, 255, 0.18)",
            filter: "blur(12px)",
          }}
        />
        {/* Cyan corner accent top-left */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "18px",
            height: "2px",
            background: "#00d4ff",
            borderRadius: "0 0 2px 2px",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "2px",
            height: "18px",
            background: "#00d4ff",
            borderRadius: "0 2px 2px 0",
            opacity: 0.9,
          }}
        />
        {/* Cyan corner accent bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "18px",
            height: "2px",
            background: "#00d4ff",
            borderRadius: "2px 2px 0 0",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "2px",
            height: "18px",
            background: "#00d4ff",
            borderRadius: "2px 0 0 2px",
            opacity: 0.9,
          }}
        />
        {/* HS text */}
        <span
          style={{
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          <span style={{ color: "#00d4ff" }}>H</span>
          <span style={{ color: "#e2e8f0" }}>S</span>
        </span>
      </div>
    ),
    { ...size }
  );
}
