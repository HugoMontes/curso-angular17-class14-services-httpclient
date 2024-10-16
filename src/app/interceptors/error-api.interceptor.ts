import { HttpInterceptorFn } from '@angular/common/http';

export const ErrorApiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("------ERROR INTERCEPTOR------");
  return next(req);
};
