export default interface ErrorMessage {
	status: number;
	message: string;
	errorCode?: string;
    data?: Record<string, any>;
}
