import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private logger: LoggerService) { }

  handleError(error: any): void {
    this.logger.error(error.message ? error.message : error.toString());
    // Optionally, show a user-friendly message or send error to server
  }
}
