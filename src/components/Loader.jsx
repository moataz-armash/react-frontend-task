export default function Loader() {
  return (
    <div style={{ display: "grid", placeItems: "center", padding: "40px 0" }}>
      <div
        style={{
          width: 36,
          height: 36,
          border: "4px solid #1f2937",
          borderTopColor: "#60a5fa",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
