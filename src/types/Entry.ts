import type Emoji from "./Emojis"

export default interface Entry {
  id: number;
  body: string;
  emoji: Emoji | null;
  createdAt: Date;
  userId: number;
}