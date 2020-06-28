import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './pages/services/spinner.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(req).pipe(tap(
            (event: HttpEvent<any>) => {
                this.spinnerService.hide();
            },
            (response) => {
                this.spinnerService.hide();
            }
            
        ));
    }
}