export type FriendshipStatus = "pending" | "accepted" | "rejected" | "blocked";

export interface Friendship {
  id: string;
  requesterId: string;
  addresseeId: string;
  status: FriendshipStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface FriendWithPresence {
  id: string;
  displayName: string;
  avatarUrl?: string;
  location?: string;
  status: "online" | "idle" | "busy" | "offline";
  customMessage?: string;
}
