// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api',
  emailUrl: 'http://localhost:8000/send/email',
  apiTimeout: 5000,
  siteKey: '6LcF54UUAAAAADxcvQ3_vFA5DHIuv1C6RM54ZAN1',
  // Environment variables of Clicky site in order to get stats
  statsSiteId: '101170484',
  statsSiteKey: '76fe1414162023f1',
  statsUrl: 'https://api.clicky.com/api/stats/4?site_id=101170484&sitekey=76fe1414162023f1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
