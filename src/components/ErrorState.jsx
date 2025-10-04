export default function ErrorState({ message = "Something went wrong." }) {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: 16,
        borderRadius: 12,
        margin: "16px auto",
        width: "min(800px, 100%)",
      }}>
      <p style={{ margin: 0, color: "#fecaca" }}>⚠️ {message}</p>
    </div>
  );
}
