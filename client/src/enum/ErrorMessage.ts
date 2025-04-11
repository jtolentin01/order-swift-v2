export enum AuthError {
    INVALID_EMAIL = 'Please enter a valid email address',
    UNAUTHORIZE = 'Unauthorize Access',
    WRONG_EMAIL_PASSWORD = 'Wrong Email or Password',
    REVOKED_AUTH = 'Signed Out',
}

export enum HttpError {
    NOT_FOUND = 'Requested resources not found',
    SERVER_ERROR = 'Internal Server Error',
    UNKNOWN = 'Something Went Wrong'
}

export enum CommonError {
    ALL_FIELDS_REQUIRED = 'All fields are required.'
}