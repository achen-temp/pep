package com.pilot.pep.Exception;

import lombok.Data;

@Data
public class ErrorResponse {
    private String message;
    private String details;
    private int status;

    public ErrorResponse(String message, String details, int status) {
        this.message = message;
        this.details = details;
        this.status = status;
    }

}
