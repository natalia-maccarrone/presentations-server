export type PresentationPayload = {
  title: string;
  details: string;
  room: number;
  speaker: Speaker;
};

export type Speaker = {
  name: string;
  company: string;
  email: string;
  bio: string;
};

export type AttendeePayload = {
  name: string;
  company: string;
  email: string;
};
