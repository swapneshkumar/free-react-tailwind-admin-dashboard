export interface AuthResponse {
  id: number;
  username: string;
  displayName: string;
  email: string;
  token: string;
  refreshToken: string;
  expiresIn: string; // ISO Date string, could use Date if parsed
  agencyId: number;
  agencyName: string;
}
