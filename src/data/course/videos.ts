import type { Video } from "./types";
// Add only verified videos here. Empty weeks render the optional placeholder.
// Shape: {title, channel, youtubeId, description?, titleEn?, descriptionEn?}.
// Existing verified URL-based entries are also supported by the player.
export const videosByWeek: Record<number, Video[]> = {};
