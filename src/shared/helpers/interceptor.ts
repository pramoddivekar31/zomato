import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { finalize } from "rxjs/operators"
import { LoaderService } from "../service/loader-service"

@Injectable()
export class HttpInterceptorHeaders implements HttpInterceptor {
  constructor(
    public loaderService: LoaderService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.loading.next(true)

    const userKey = 'ebce07efec80d0017e1a3ee7173cdbd6'
    const headersWithUserKey = req.clone({ headers: req.headers.set('user-key', userKey) })

    return next.handle(headersWithUserKey).pipe(
      finalize(() => this.loaderService.loading.next(false))
    )
  }
}