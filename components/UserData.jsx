import { useAuthService } from "@services/AuthContext";

const UserData = () => {
    const authService = useAuthService();
    return (
        <>
            <div>Is User Authorized: {authService.isAuthorized ? 'yes': 'no'}</div>
            <div>UserId: {authService.userId}</div>
            <div>roles: {authService.roles}</div>
            <div>Token: {authService.token}</div>
        </>
    );
}

export default UserData;