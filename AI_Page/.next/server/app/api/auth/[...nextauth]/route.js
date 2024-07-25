"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_suradet_Documents_AI_Inventory_Management_Platform_AI_Page_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/suradet/Documents/AI-Inventory-Management-Platform-/AI_Page/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_suradet_Documents_AI_Inventory_Management_Platform_AI_Page_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnN1cmFkZXQlMkZEb2N1bWVudHMlMkZBSS1JbnZlbnRvcnktTWFuYWdlbWVudC1QbGF0Zm9ybS0lMkZBSV9QYWdlJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnN1cmFkZXQlMkZEb2N1bWVudHMlMkZBSS1JbnZlbnRvcnktTWFuYWdlbWVudC1QbGF0Zm9ybS0lMkZBSV9QYWdlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQ3dFO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhY2NpbmUtYm9vay1hcHAvP2M1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zdXJhZGV0L0RvY3VtZW50cy9BSS1JbnZlbnRvcnktTWFuYWdlbWVudC1QbGF0Zm9ybS0vQUlfUGFnZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3N1cmFkZXQvRG9jdW1lbnRzL0FJLUludmVudG9yeS1NYW5hZ2VtZW50LVBsYXRmb3JtLS9BSV9QYWdlL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/libs/prismadb */ \"(rsc)/./src/libs/prismadb.ts\");\n\n\n\n\n\n\n\n/**\n * @swagger\n * tags:\n *   name: Users\n *   description: User API\n */ /**\n * @swagger\n * /api/register:\n *   post:\n *     summary: Register a new user\n *     tags: [Users]\n *     requestBody:\n *       required: true\n *       content:\n *         application/json:\n *           schema:\n *             type: object\n *             properties:\n *               email:\n *                 type: string\n *               name:\n *                 type: string\n *               password:\n *                 type: string\n *                 format: password\n *     responses:\n *       '200':\n *         description: User registration successful\n *         schema:\n *           $ref: '#/definitions/User'\n *       '400':\n *         description: Bad request - Invalid input data\n *       '500':\n *         description: Internal server error\n */ /**\n * @swagger\n * definitions:\n *   User:\n *     type: object\n *     properties:\n *       id:\n *         type: string\n *         format: uuid\n *       name:\n *         type: string\n *       tel:\n *         type: string\n *       role:\n *         type: string\n *       email:\n *         type: string\n *       emailVerified:\n *         type: string\n *         format: date-time\n *       image:\n *         type: string\n *       createdAt:\n *         type: string\n *         format: date-time\n *       updatedAt:\n *         type: string\n *         format: date-time\n *       favouriteIds:\n *         type: array\n *         items:\n *           type: string\n *           format: uuid\n *       companyId:\n *         type: string\n *         format: uuid\n */ /**\n * @swagger\n * /api/auth/signin:\n *   post:\n *     summary: Sign in with email and password\n *     tags: [Users]\n *     requestBody:\n *       required: true\n *       content:\n *         application/json:\n *           schema:\n *             $ref: '#/definitions/Credentials'\n *     responses:\n *       '200':\n *         description: Successful authentication\n *         schema:\n *           type: object\n *           properties:\n *             token:\n *               type: string\n *               description: JSON Web Token (JWT) for subsequent requests\n *       '401':\n *         description: Unauthorized - Invalid credentials\n *       '500':\n *         description: Internal server error\n * definitions:\n *   Credentials:\n *     type: object\n *     properties:\n *       email:\n *         type: string\n *       password:\n *         type: string\n *         format: password\n */ const authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: \"465ac2ee3732d8911e93\",\n            clientSecret: \"3b1d0825a3a34f88d7a4434bac422117dda213e1\"\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: \"261047677045-f0t3r3m2t0peit4uj1hijl0on15jrp4e.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/\"\n    },\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ3NCO0FBQ2dCO0FBQ1Y7QUFDQTtBQUNFO0FBRXJCO0FBRXBDOzs7OztDQUtDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkJDLEdBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0NDLEdBRU0sTUFBTU8sY0FBMkI7SUFDdENDLFNBQVNILHdFQUFhQSxDQUFDQyxzREFBTUE7SUFDN0JHLFdBQVc7UUFDVE4sc0VBQWNBLENBQUM7WUFDYk8sVUFBVUMsc0JBQXFCO1lBQy9CRyxjQUFjSCwwQ0FBeUI7UUFDekM7UUFDQVAsc0VBQWNBLENBQUM7WUFDYk0sVUFBVUMsMEVBQTRCO1lBQ3RDRyxjQUFjSCxxQ0FBZ0M7UUFDaEQ7UUFDQVQsMkVBQW1CQSxDQUFDO1lBQ2xCZ0IsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLHNEQUFNQSxDQUFDb0IsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMUixPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0EsTUFBTUcsZ0JBQWdCO29CQUNsQyxNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1LLG9CQUFvQixNQUFNOUIscURBQWMsQ0FDNUNtQixZQUFZSSxRQUFRLEVBQ3BCRyxLQUFLRyxjQUFjO2dCQUdyQixJQUFJLENBQUNDLG1CQUFtQjtvQkFDdEIsTUFBTSxJQUFJTCxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPQztZQUNUO1FBQ0Y7S0FDRDtJQUNETSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxPQUFPdkIsa0JBQXlCO0lBQ2hDd0IsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsUUFBUTFCLFFBQVFDLEdBQUcsQ0FBQzBCLGVBQWU7QUFDckMsRUFBQztBQUVELE1BQU1DLFVBQVV0QyxnREFBUUEsQ0FBQ007QUFDZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWNjaW5lLWJvb2stYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcbmltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGlicy9wcmlzbWFkYlwiXG5cbi8qKlxuICogQHN3YWdnZXJcbiAqIHRhZ3M6XG4gKiAgIG5hbWU6IFVzZXJzXG4gKiAgIGRlc2NyaXB0aW9uOiBVc2VyIEFQSVxuICovXG5cbi8qKlxuICogQHN3YWdnZXJcbiAqIC9hcGkvcmVnaXN0ZXI6XG4gKiAgIHBvc3Q6XG4gKiAgICAgc3VtbWFyeTogUmVnaXN0ZXIgYSBuZXcgdXNlclxuICogICAgIHRhZ3M6IFtVc2Vyc11cbiAqICAgICByZXF1ZXN0Qm9keTpcbiAqICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gKiAgICAgICBjb250ZW50OlxuICogICAgICAgICBhcHBsaWNhdGlvbi9qc29uOlxuICogICAgICAgICAgIHNjaGVtYTpcbiAqICAgICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgICAgcHJvcGVydGllczpcbiAqICAgICAgICAgICAgICAgZW1haWw6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIG5hbWU6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIHBhc3N3b3JkOlxuICogICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICAgICAgICAgIGZvcm1hdDogcGFzc3dvcmRcbiAqICAgICByZXNwb25zZXM6XG4gKiAgICAgICAnMjAwJzpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFVzZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcbiAqICAgICAgICAgc2NoZW1hOlxuICogICAgICAgICAgICRyZWY6ICcjL2RlZmluaXRpb25zL1VzZXInXG4gKiAgICAgICAnNDAwJzpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IEJhZCByZXF1ZXN0IC0gSW52YWxpZCBpbnB1dCBkYXRhXG4gKiAgICAgICAnNTAwJzpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IEludGVybmFsIHNlcnZlciBlcnJvclxuICovXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiBkZWZpbml0aW9uczpcbiAqICAgVXNlcjpcbiAqICAgICB0eXBlOiBvYmplY3RcbiAqICAgICBwcm9wZXJ0aWVzOlxuICogICAgICAgaWQ6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICBmb3JtYXQ6IHV1aWRcbiAqICAgICAgIG5hbWU6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgdGVsOlxuICogICAgICAgICB0eXBlOiBzdHJpbmdcbiAqICAgICAgIHJvbGU6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgZW1haWw6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgZW1haWxWZXJpZmllZDpcbiAqICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgIGZvcm1hdDogZGF0ZS10aW1lXG4gKiAgICAgICBpbWFnZTpcbiAqICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICBjcmVhdGVkQXQ6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICBmb3JtYXQ6IGRhdGUtdGltZVxuICogICAgICAgdXBkYXRlZEF0OlxuICogICAgICAgICB0eXBlOiBzdHJpbmdcbiAqICAgICAgICAgZm9ybWF0OiBkYXRlLXRpbWVcbiAqICAgICAgIGZhdm91cml0ZUlkczpcbiAqICAgICAgICAgdHlwZTogYXJyYXlcbiAqICAgICAgICAgaXRlbXM6XG4gKiAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgZm9ybWF0OiB1dWlkXG4gKiAgICAgICBjb21wYW55SWQ6XG4gKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICBmb3JtYXQ6IHV1aWRcbiAqL1xuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiAvYXBpL2F1dGgvc2lnbmluOlxuICogICBwb3N0OlxuICogICAgIHN1bW1hcnk6IFNpZ24gaW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcbiAqICAgICB0YWdzOiBbVXNlcnNdXG4gKiAgICAgcmVxdWVzdEJvZHk6XG4gKiAgICAgICByZXF1aXJlZDogdHJ1ZVxuICogICAgICAgY29udGVudDpcbiAqICAgICAgICAgYXBwbGljYXRpb24vanNvbjpcbiAqICAgICAgICAgICBzY2hlbWE6XG4gKiAgICAgICAgICAgICAkcmVmOiAnIy9kZWZpbml0aW9ucy9DcmVkZW50aWFscydcbiAqICAgICByZXNwb25zZXM6XG4gKiAgICAgICAnMjAwJzpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb25cbiAqICAgICAgICAgc2NoZW1hOlxuICogICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgIHByb3BlcnRpZXM6XG4gKiAgICAgICAgICAgICB0b2tlbjpcbiAqICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBKU09OIFdlYiBUb2tlbiAoSldUKSBmb3Igc3Vic2VxdWVudCByZXF1ZXN0c1xuICogICAgICAgJzQwMSc6XG4gKiAgICAgICAgIGRlc2NyaXB0aW9uOiBVbmF1dGhvcml6ZWQgLSBJbnZhbGlkIGNyZWRlbnRpYWxzXG4gKiAgICAgICAnNTAwJzpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IEludGVybmFsIHNlcnZlciBlcnJvclxuICogZGVmaW5pdGlvbnM6XG4gKiAgIENyZWRlbnRpYWxzOlxuICogICAgIHR5cGU6IG9iamVjdFxuICogICAgIHByb3BlcnRpZXM6XG4gKiAgICAgICBlbWFpbDpcbiAqICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICBwYXNzd29yZDpcbiAqICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgIGZvcm1hdDogcGFzc3dvcmRcbiAqL1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgYXMgc3RyaW5nLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIGFzIHN0cmluZ1xuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdlbWFpbCcsIHR5cGU6ICd0ZXh0JyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ3Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXI/Lmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyZWRlbnRpYWxzJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy8nLFxuICB9LFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcbmV4cG9ydCB7aGFuZGxlciBhcyBHRVQgLGhhbmRsZXIgYXMgUE9TVH07Il0sIm5hbWVzIjpbImJjcnlwdCIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwiY29tcGFyZSIsInBhZ2VzIiwic2lnbkluIiwiZGVidWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/libs/prismadb.ts":
/*!******************************!*\
  !*** ./src/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsU0FBU0MsV0FBV0MsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUNwRCxJQUFJSSxJQUFxQyxFQUFFRixXQUFXQyxNQUFNLEdBQUdGO0FBRS9ELGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFjY2luZS1ib29rLWFwcC8uL3NyYy9saWJzL3ByaXNtYWRiLnRzPzM2YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBjbGllbnQgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuradet%2FDocuments%2FAI-Inventory-Management-Platform-%2FAI_Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();