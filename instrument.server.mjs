import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://c6915be603e5b50077fcc7deebe247a9@o4509724343271424.ingest.de.sentry.io/4509724347793488",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
