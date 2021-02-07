import * as functions from "firebase-functions";

const universal = require(`${process.cwd()}/dist/server/main`).app();

export const ssr = functions.https.onRequest(universal);
