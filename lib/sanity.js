import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'j52o0a9a',
  dataset: 'production',
  apiVersion: '2022-04-28',
  token:
    'sk26Ka40yrKHcsh3qYKTDGueoXLCngURDQeoZH4tsCVfL9i8LrDmU1ZNZIO7wdueVFCRCNDE4EYGXJcrrzIicwfim8mfl8NRmB8W4UKWL9mUUkqJLK7VqgsKoFxMLlRpMjNPohkKocV7Vcc6iRpyxAweADtN9fwkJn6xdAYsNfRjILiFD2XM',
  useCdn: false,
});
