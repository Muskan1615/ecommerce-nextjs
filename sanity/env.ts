const isStudio = typeof window !== "undefined" && window.location?.hostname.includes("sanity.studio");

export const apiVersion = "2025-05-11";
export const dataset = isStudio
  ? "production"
  : process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const projectId = isStudio
  ? "z2vjw7vy"
  : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
