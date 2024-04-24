export enum QueryStatusMessage {
  QUERY_EXECUTED_SUCCESSFULLY = 'Query executed successfully',
  DATA_SAVED_SUCCESSFULLY = 'Data saved successfully',
  RECORD_CREATED_SUCCESSFULLY = 'Record created successfully',
}
export enum ErrorMessage {
  BAD_REQUEST = 'Bad request. Please check your input data.',
  UNAUTHORIZED = 'Unauthorized access. Please check your credentials.',
  FORBIDDEN = 'Forbidden access. You do not have permission to access this resource.',
  NOT_FOUND = 'Resource not found. The requested resource could not be found.',
  INTERNAL_SERVER_ERROR = 'Internal server error. Please try again later.',
}
export interface QueryResponse {
  message: QueryStatusMessage | ErrorMessage;
  code: number;
}
