import { User } from "./user.models";

/**
 * Interface for the 'Profile' data
 */
export interface Profile {
  isLoading: boolean;
  user: User | null;
}
