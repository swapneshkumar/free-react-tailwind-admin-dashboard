import { AuthResponse } from "./AuthResponse";

interface AuthContextType  {
    token: string | null;
    user: string | null;
    getResponse: () => AuthResponse;
    login: (authResponse: AuthResponse) => void;
    logout: () => void;
};

export default AuthContextType;