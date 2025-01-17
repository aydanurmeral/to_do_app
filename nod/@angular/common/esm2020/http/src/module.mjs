/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from './interceptor';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport, withNoXsrfProtection, withXsrfConfiguration } from './provider';
import { HttpXsrfCookieExtractor, HttpXsrfInterceptor, HttpXsrfTokenExtractor, XSRF_DEFAULT_COOKIE_NAME, XSRF_DEFAULT_HEADER_NAME, XSRF_ENABLED } from './xsrf';
import * as i0 from "@angular/core";
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
export class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                withNoXsrfProtection().ɵproviders,
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: withXsrfConfiguration(options).ɵproviders,
        };
    }
}
HttpClientXsrfModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientXsrfModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HttpClientXsrfModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.5", ngImport: i0, type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientXsrfModule, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        withXsrfConfiguration({
            cookieName: XSRF_DEFAULT_COOKIE_NAME,
            headerName: XSRF_DEFAULT_HEADER_NAME,
        }).ɵproviders,
        { provide: XSRF_ENABLED, useValue: true },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientXsrfModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        HttpXsrfInterceptor,
                        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                        withXsrfConfiguration({
                            cookieName: XSRF_DEFAULT_COOKIE_NAME,
                            headerName: XSRF_DEFAULT_HEADER_NAME,
                        }).ɵproviders,
                        { provide: XSRF_ENABLED, useValue: true },
                    ],
                }]
        }] });
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
export class HttpClientModule {
}
HttpClientModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HttpClientModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.5", ngImport: i0, type: HttpClientModule });
HttpClientModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientModule, providers: [
        provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({
            cookieName: XSRF_DEFAULT_COOKIE_NAME,
            headerName: XSRF_DEFAULT_HEADER_NAME,
        })),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientModule, decorators: [{
            type: NgModule,
            args: [{
                    /**
                     * Configures the [dependency injector](guide/glossary#injector) where it is imported
                     * with supporting services for HTTP communications.
                     */
                    providers: [
                        provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({
                            cookieName: XSRF_DEFAULT_COOKIE_NAME,
                            headerName: XSRF_DEFAULT_HEADER_NAME,
                        })),
                    ],
                }]
        }] });
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * @publicApi
 */
export class HttpClientJsonpModule {
}
HttpClientJsonpModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientJsonpModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HttpClientJsonpModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.5", ngImport: i0, type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientJsonpModule, providers: [
        withJsonpSupport().ɵproviders,
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: HttpClientJsonpModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        withJsonpSupport().ɵproviders,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ3BJLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7O0FBRTlKOzs7Ozs7Ozs7OztHQVdHO0FBYUgsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQjs7T0FFRztJQUNILE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixFQUFFLENBQUMsVUFBVTthQUNsQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFHZixFQUFFO1FBQ0osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVU7U0FDckQsQ0FBQztJQUNKLENBQUM7OzRIQTdCVSxvQkFBb0I7NkhBQXBCLG9CQUFvQjs2SEFBcEIsb0JBQW9CLGFBWHBCO1FBQ1QsbUJBQW1CO1FBQ25CLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO1FBQzNFLEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztRQUNwRSxxQkFBcUIsQ0FBQztZQUNwQixVQUFVLEVBQUUsd0JBQXdCO1lBQ3BDLFVBQVUsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQyxDQUFDLFVBQVU7UUFDYixFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztLQUN4QztzR0FFVSxvQkFBb0I7a0JBWmhDLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjt3QkFDbkIsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7d0JBQzNFLEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQzt3QkFDcEUscUJBQXFCLENBQUM7NEJBQ3BCLFVBQVUsRUFBRSx3QkFBd0I7NEJBQ3BDLFVBQVUsRUFBRSx3QkFBd0I7eUJBQ3JDLENBQUMsQ0FBQyxVQUFVO3dCQUNiLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO3FCQUN4QztpQkFDRjs7QUFpQ0Q7Ozs7Ozs7O0dBUUc7QUFnQkgsTUFBTSxPQUFPLGdCQUFnQjs7d0hBQWhCLGdCQUFnQjt5SEFBaEIsZ0JBQWdCO3lIQUFoQixnQkFBZ0IsYUFWaEI7UUFDVCxpQkFBaUIsQ0FDYixzQkFBc0IsRUFBRSxFQUN4QixxQkFBcUIsQ0FBQztZQUNwQixVQUFVLEVBQUUsd0JBQXdCO1lBQ3BDLFVBQVUsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQyxDQUNEO0tBQ047c0dBRVUsZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNSOzs7dUJBR0c7b0JBQ0gsU0FBUyxFQUFFO3dCQUNULGlCQUFpQixDQUNiLHNCQUFzQixFQUFFLEVBQ3hCLHFCQUFxQixDQUFDOzRCQUNwQixVQUFVLEVBQUUsd0JBQXdCOzRCQUNwQyxVQUFVLEVBQUUsd0JBQXdCO3lCQUNyQyxDQUFDLENBQ0Q7cUJBQ047aUJBQ0Y7O0FBSUQ7Ozs7Ozs7R0FPRztBQU1ILE1BQU0sT0FBTyxxQkFBcUI7OzZIQUFyQixxQkFBcUI7OEhBQXJCLHFCQUFxQjs4SEFBckIscUJBQXFCLGFBSnJCO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVO0tBQzlCO3NHQUVVLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixTQUFTLEVBQUU7d0JBQ1QsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVO3FCQUM5QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SU30gZnJvbSAnLi9pbnRlcmNlcHRvcic7XG5pbXBvcnQge3Byb3ZpZGVIdHRwQ2xpZW50LCB3aXRoSW50ZXJjZXB0b3JzRnJvbURpLCB3aXRoSnNvbnBTdXBwb3J0LCB3aXRoTm9Yc3JmUHJvdGVjdGlvbiwgd2l0aFhzcmZDb25maWd1cmF0aW9ufSBmcm9tICcuL3Byb3ZpZGVyJztcbmltcG9ydCB7SHR0cFhzcmZDb29raWVFeHRyYWN0b3IsIEh0dHBYc3JmSW50ZXJjZXB0b3IsIEh0dHBYc3JmVG9rZW5FeHRyYWN0b3IsIFhTUkZfREVGQVVMVF9DT09LSUVfTkFNRSwgWFNSRl9ERUZBVUxUX0hFQURFUl9OQU1FLCBYU1JGX0VOQUJMRUR9IGZyb20gJy4veHNyZic7XG5cbi8qKlxuICogQ29uZmlndXJlcyBYU1JGIHByb3RlY3Rpb24gc3VwcG9ydCBmb3Igb3V0Z29pbmcgcmVxdWVzdHMuXG4gKlxuICogRm9yIGEgc2VydmVyIHRoYXQgc3VwcG9ydHMgYSBjb29raWUtYmFzZWQgWFNSRiBwcm90ZWN0aW9uIHN5c3RlbSxcbiAqIHVzZSBkaXJlY3RseSB0byBjb25maWd1cmUgWFNSRiBwcm90ZWN0aW9uIHdpdGggdGhlIGNvcnJlY3RcbiAqIGNvb2tpZSBhbmQgaGVhZGVyIG5hbWVzLlxuICpcbiAqIElmIG5vIG5hbWVzIGFyZSBzdXBwbGllZCwgdGhlIGRlZmF1bHQgY29va2llIG5hbWUgaXMgYFhTUkYtVE9LRU5gXG4gKiBhbmQgdGhlIGRlZmF1bHQgaGVhZGVyIG5hbWUgaXMgYFgtWFNSRi1UT0tFTmAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBIdHRwWHNyZkludGVyY2VwdG9yLFxuICAgIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlRXhpc3Rpbmc6IEh0dHBYc3JmSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfSxcbiAgICB7cHJvdmlkZTogSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgdXNlQ2xhc3M6IEh0dHBYc3JmQ29va2llRXh0cmFjdG9yfSxcbiAgICB3aXRoWHNyZkNvbmZpZ3VyYXRpb24oe1xuICAgICAgY29va2llTmFtZTogWFNSRl9ERUZBVUxUX0NPT0tJRV9OQU1FLFxuICAgICAgaGVhZGVyTmFtZTogWFNSRl9ERUZBVUxUX0hFQURFUl9OQU1FLFxuICAgIH0pLsm1cHJvdmlkZXJzLFxuICAgIHtwcm92aWRlOiBYU1JGX0VOQUJMRUQsIHVzZVZhbHVlOiB0cnVlfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFhzcmZNb2R1bGUge1xuICAvKipcbiAgICogRGlzYWJsZSB0aGUgZGVmYXVsdCBYU1JGIHByb3RlY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgZGlzYWJsZSgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEh0dHBDbGllbnRYc3JmTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBIdHRwQ2xpZW50WHNyZk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB3aXRoTm9Yc3JmUHJvdGVjdGlvbigpLsm1cHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBYU1JGIHByb3RlY3Rpb24uXG4gICAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IGNhbiBzcGVjaWZ5IGVpdGhlciBvciBib3RoXG4gICAqIGNvb2tpZSBuYW1lIG9yIGhlYWRlciBuYW1lLlxuICAgKiAtIENvb2tpZSBuYW1lIGRlZmF1bHQgaXMgYFhTUkYtVE9LRU5gLlxuICAgKiAtIEhlYWRlciBuYW1lIGRlZmF1bHQgaXMgYFgtWFNSRi1UT0tFTmAuXG4gICAqXG4gICAqL1xuICBzdGF0aWMgd2l0aE9wdGlvbnMob3B0aW9uczoge1xuICAgIGNvb2tpZU5hbWU/OiBzdHJpbmcsXG4gICAgaGVhZGVyTmFtZT86IHN0cmluZyxcbiAgfSA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxIdHRwQ2xpZW50WHNyZk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSHR0cENsaWVudFhzcmZNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHdpdGhYc3JmQ29uZmlndXJhdGlvbihvcHRpb25zKS7JtXByb3ZpZGVycyxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSBmb3IgYEh0dHBDbGllbnRgXG4gKiB3aXRoIHN1cHBvcnRpbmcgc2VydmljZXMgZm9yIFhTUkYuIEF1dG9tYXRpY2FsbHkgaW1wb3J0ZWQgYnkgYEh0dHBDbGllbnRNb2R1bGVgLlxuICpcbiAqIFlvdSBjYW4gYWRkIGludGVyY2VwdG9ycyB0byB0aGUgY2hhaW4gYmVoaW5kIGBIdHRwQ2xpZW50YCBieSBiaW5kaW5nIHRoZW0gdG8gdGhlXG4gKiBtdWx0aXByb3ZpZGVyIGZvciBidWlsdC1pbiBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5I2RpLXRva2VuKSBgSFRUUF9JTlRFUkNFUFRPUlNgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIFtkZXBlbmRlbmN5IGluamVjdG9yXShndWlkZS9nbG9zc2FyeSNpbmplY3Rvcikgd2hlcmUgaXQgaXMgaW1wb3J0ZWRcbiAgICogd2l0aCBzdXBwb3J0aW5nIHNlcnZpY2VzIGZvciBIVFRQIGNvbW11bmljYXRpb25zLlxuICAgKi9cbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUh0dHBDbGllbnQoXG4gICAgICAgIHdpdGhJbnRlcmNlcHRvcnNGcm9tRGkoKSxcbiAgICAgICAgd2l0aFhzcmZDb25maWd1cmF0aW9uKHtcbiAgICAgICAgICBjb29raWVOYW1lOiBYU1JGX0RFRkFVTFRfQ09PS0lFX05BTUUsXG4gICAgICAgICAgaGVhZGVyTmFtZTogWFNSRl9ERUZBVUxUX0hFQURFUl9OQU1FLFxuICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudE1vZHVsZSB7XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSBmb3IgYEh0dHBDbGllbnRgXG4gKiB3aXRoIHN1cHBvcnRpbmcgc2VydmljZXMgZm9yIEpTT05QLlxuICogV2l0aG91dCB0aGlzIG1vZHVsZSwgSnNvbnAgcmVxdWVzdHMgcmVhY2ggdGhlIGJhY2tlbmRcbiAqIHdpdGggbWV0aG9kIEpTT05QLCB3aGVyZSB0aGV5IGFyZSByZWplY3RlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHdpdGhKc29ucFN1cHBvcnQoKS7JtXByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEpzb25wTW9kdWxlIHtcbn1cbiJdfQ==