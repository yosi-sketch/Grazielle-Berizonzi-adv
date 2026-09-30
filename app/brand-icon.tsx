export default function BrandIcon({
  fontSize,
}: {
  fontSize: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#111111",
        color: "#ffffff",
        border: "3px solid #b69a7a",
        borderRadius: 32,
      }}
    >
      <span
        style={{
          fontFamily: "serif",
          fontSize,
          fontStyle: "italic",
          lineHeight: 0.85,
        }}
      >
        B
      </span>
      <span
        style={{
          width: "42%",
          height: 2,
          marginTop: 8,
          backgroundColor: "#b69a7a",
        }}
      />
    </div>
  );
}
