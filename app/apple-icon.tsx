import { ImageResponse } from "next/og";
import { HSIconArtwork } from "@/lib/hs-icon-artwork";

export const size = { width: 1024, height: 1024 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<HSIconArtwork />, size);
}
