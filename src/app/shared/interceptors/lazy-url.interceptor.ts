import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LazyloadingService } from 'src/app/shared/service/lazyloading.service';

@Injectable()
export class LazyUrlInterceptor implements HttpInterceptor {

  constructor(private lazyloadingService: LazyloadingService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.lazyloadingService.show();
      request = request.clone({
        setHeaders : {
          Accept :'*/*',
          Connetion : 'keep-alive',
          "Content-Type": "application/json" 
        }
      });
    
    return next.handle(request).pipe(
      finalize(() => {
        this.lazyloadingService.close();
      })
    );
  }
}