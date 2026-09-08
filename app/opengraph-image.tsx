import { ImageResponse } from "next/og";
import { site, brandName } from "@/lib/site";

export const runtime = "edge";
export const alt = `${brandName} — independent authorized retailer of ${site.carrier} services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #003567 0%, #004587 55%, #0084FF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Independent Authorized Retailer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 74,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          Optimum Internet, TV, Mobile &amp; Home Phone
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 30,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Call to confirm availability and pricing for your address
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Independent Authorized Retailer — Not {site.carrier}.
        </div>
      </div>
    ),
    size,
  );
}
