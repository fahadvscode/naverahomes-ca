import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Navera at Mayfield Village, detached homes by Digreen Homes at Countryside Drive and Torbram Road, Brampton, Ontario";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAF7F0",
          color: "#1D2F25",
        }}
      >
        <div style={{ width: 28, height: "100%", background: "#1D2F25" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#8F5B38" }}>Brampton, Ontario</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 68, fontFamily: "Georgia", lineHeight: 1.05 }}>
              Navera at Mayfield Village
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#2F4A3A" }}>
              38 and 41 Series detached homes · from $999,999
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#2F4A3A" }}>
            Countryside Drive and Torbram Road · Digreen Homes
          </div>
        </div>
      </div>
    ),
    size,
  );
}
