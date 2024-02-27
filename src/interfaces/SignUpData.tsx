export default interface SignupData {
    username: string;
    email: string;
    password: string; 
    confirmPassword: string;  
}

export type LoginData = Pick<SignupData, 'email' | 'password' >;