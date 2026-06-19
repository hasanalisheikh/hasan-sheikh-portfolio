export function HSIconArtwork() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0d1424 0%, #0a0a1a 58%, #061018 100%)",
        borderRadius: "22%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "6%",
          borderRadius: "20%",
          background:
            "radial-gradient(circle at 32% 28%, rgba(0, 212, 255, 0.22), transparent 30%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "12%",
          width: "26%",
          height: "5%",
          background: "#00d4ff",
          borderRadius: "999px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "12%",
          width: "5%",
          height: "26%",
          background: "#00d4ff",
          borderRadius: "999px",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "12%",
          bottom: "12%",
          width: "26%",
          height: "5%",
          background: "#00d4ff",
          borderRadius: "999px",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "12%",
          bottom: "12%",
          width: "5%",
          height: "26%",
          background: "#00d4ff",
          borderRadius: "999px",
        }}
      />
      <span
        style={{
          display: "flex",
          color: "#e2e8f0",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 390,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "#00d4ff" }}>H</span>
        <span>S</span>
      </span>
    </div>
  );
}
