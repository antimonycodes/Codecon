export interface Meeting {
  id: string;
  creatorId: string;
  meetingUrl: string;
  participants: string[];
  startedAt: Date;
  endedAt?: Date;
}
