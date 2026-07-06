import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#020304",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(99,102,241,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3B82F6, #60A5FA, #818CF8)",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            IC
          </div>
          <div style={{ display: "flex", color: "#8A93A3", fontSize: 24, letterSpacing: 2 }}>
            SEO · GOOGLE ADS · META ADS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#F7F8FA",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          <span>Igel G. Cudiera</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "#8A93A3",
            fontSize: 30,
            maxWidth: 900,
          }}
        >
          Results-driven SEO Specialist helping businesses rank higher &amp; convert more.
        </div>
      </div>
    ),
    { ...size }
  );
}
