import {z} from 'zod';

export const MemberRoleSchema = z.enum(['guardian', 'child', 'elder']);
export type MemberRole = z.infer<typeof MemberRoleSchema>;

export const AppSectionSchema = z.enum(['wall', 'challenge', 'meeting', 'contests']);
export type AppSection = z.infer<typeof AppSectionSchema>;

export interface Household {
  id: string;
  name: string;
  avatar: string;
  tz: string;
  createdAt: string;
}

export interface Member {
  id: string;
  householdId: string;
  userId: string | null;
  role: MemberRole;
  displayName: string;
  avatar: string;
  faceless: boolean;
}

export type AsyncStatus<T> =
  | {status: 'loading'}
  | {status: 'error'; message: string}
  | {status: 'empty'}
  | {status: 'ready'; data: T};
