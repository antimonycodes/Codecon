export const PRESENCE_STATUS = {
  ONLINE: "online",
  IDLE: "idle",
  BUSY: "busy",
  OFFLINE: "offline",
} as const;

export const IDLE_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes
export const OFFLINE_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes
// export const MEETING_DURATION_LIMIT_MS = 2 * 60 * 60 * 1000; // 2 hours
