export type PresenceStatus = "online" | "offline" | "away" | "busy";

export interface Presence {
  userId: string;
  status: string;
  lastActiveAt: string;
  customStatusMessage?: string;
}

export interface PresenceUpdateEvent {
  userId: string;
  status: PresenceStatus;
  timestamp: Date;
}
