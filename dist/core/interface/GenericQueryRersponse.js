"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.QueryStatusMessage = void 0;
var QueryStatusMessage;
(function (QueryStatusMessage) {
    QueryStatusMessage["QUERY_EXECUTED_SUCCESSFULLY"] = "Query executed successfully";
    QueryStatusMessage["DATA_SAVED_SUCCESSFULLY"] = "Data saved successfully";
    QueryStatusMessage["RECORD_CREATED_SUCCESSFULLY"] = "Record created successfully";
})(QueryStatusMessage || (exports.QueryStatusMessage = QueryStatusMessage = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["BAD_REQUEST"] = "Bad request. Please check your input data.";
    ErrorMessage["UNAUTHORIZED"] = "Unauthorized access. Please check your credentials.";
    ErrorMessage["FORBIDDEN"] = "Forbidden access. You do not have permission to access this resource.";
    ErrorMessage["NOT_FOUND"] = "Resource not found. The requested resource could not be found.";
    ErrorMessage["INTERNAL_SERVER_ERROR"] = "Internal server error. Please try again later.";
})(ErrorMessage || (exports.ErrorMessage = ErrorMessage = {}));
//# sourceMappingURL=GenericQueryRersponse.js.map