export default interface ErrorResponse {
	status: number;
	message: string;
	errorCode?: string;
    data?: Record<string, any>;
}
