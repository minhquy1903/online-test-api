import { HttpStatus } from '@nestjs/common';
import { flatten, isUndefined, omitBy } from 'lodash';

export const enum ErrorCode {
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER = 'INTERNAL_SERVER',
}

export interface ISubError {
  code: ErrorCode;
  message?: string;
  parameter?: string;
  log?: string;
  custom?: Record<string, string>;
}

export class Exception extends Error {
  public code: HttpStatus;

  public errors?: ISubError[];

  public stack?: string;

  public payload?: any;

  constructor(params?: {
    statusCode: HttpStatus;
    code?: ErrorCode;
    message?: string;
    parameter?: string;
    log?: string;
    stack?: string;
    payload?: any;
    custom?: Record<string, string>;
    errors?: ISubError | ISubError[];
  }) {
    const {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
      code = ErrorCode.INTERNAL_SERVER,
      message,
      parameter,
      log,
      stack,
      payload,
      custom,
      errors,
    } = params || {};
    super();
    this.code = statusCode;
    this.stack = stack;
    this.payload = payload;
    this.errors = flatten([
      errors || {
        code,
        message,
        parameter,
        log,
        custom,
      },
    ]);
    this.errors = <ISubError[]>this.errors.map((e) => omitBy(e, isUndefined));
  }
}

export class BadRequestException extends Exception {
  constructor(message?: string) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      errors: [
        {
          code: ErrorCode.BAD_REQUEST,
          message,
        },
      ],
    });
  }
}

export class NotFoundException extends Exception {
  constructor(message?: string) {
    super({
      statusCode: HttpStatus.NOT_FOUND,
      errors: [
        {
          code: ErrorCode.NOT_FOUND,
          message,
        },
      ],
    });
  }
}

export class InternalServerException extends Exception {
  constructor(message?: string) {
    super({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      errors: [
        {
          code: ErrorCode.INTERNAL_SERVER,
          message,
        },
      ],
    });
  }
}
