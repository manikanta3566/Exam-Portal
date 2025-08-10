package com.project.entity;

public enum ErrorCode {
    USER_NOT_FOUND("USER_NOT_FOUND", "User not found"),
    INVALID_REQUEST("INVALID_REQUEST", "Invalid request data"),
    INTERNAL_ERROR("INTERNAL_ERROR", "Something went wrong"),
    USER_ALREADY_EXISTS("USER_ALREADY_EXISTS", "User already exists"),
    ROLE_NOT_FOUND("ROLE_NOT_FOUND", "Role not found"),
    PERMISSION_DENIED("PERMISSION_DENIED", "Permission denied"),
    INVALID_CREDENTIALS("INVALID_CREDENTIALS", "Invalid credentials"),
    ACCOUNT_LOCKED("ACCOUNT_LOCKED", "Account is locked"),
    TOKEN_EXPIRED("TOKEN_EXPIRED", "Token has expired"),
    UNAUTHORIZED_ACCESS("UNAUTHORIZED_ACCESS", "Unauthorized access"),
    RESOURCE_NOT_FOUND("RESOURCE_NOT_FOUND", "Resource not found");

    private final String code;
    private final String message;

    ErrorCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() { return code; }
    public String getMessage() { return message; }
}

