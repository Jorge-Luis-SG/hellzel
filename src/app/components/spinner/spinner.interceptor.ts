// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
// import { finalize, Observable } from 'rxjs';
// import { spinnerSvc } from 'src/app/services/spinnerSvc.service';

// @Injectable()
// export class SpinnerInterceptor implements HttpInterceptor {
//   constructor(private spinnerSvc: spinnerSvc){}
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.spinnerSvc.show();
//     return next.handle(req);
//   }
// }
