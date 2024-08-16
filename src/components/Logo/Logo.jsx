export default function Logo({ width, height }) {
  return (
    <img
      src="/favicon.svg"
      alt="Logo"
      style={{ width: width, height: height, paddingInline: "8px" }}
    />
  );
}
