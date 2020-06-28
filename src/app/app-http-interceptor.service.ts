import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './pages/services/spinner.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private spinner: NgxSpinnerService) {
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        return next.handle(req).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.spinner.hide();
                }
            },
            (response) => {
                this.spinner.hide();
            }
            
        ));
    }
}