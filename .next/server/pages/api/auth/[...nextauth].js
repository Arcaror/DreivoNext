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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/sequelize-adapter":
/*!***********************************************!*\
  !*** external "@next-auth/sequelize-adapter" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/sequelize-adapter");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "sequelize?9308":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "sequelize?5b59":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ "(api)/./database/Database.js":
/*!******************************!*\
  !*** ./database/Database.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Sequelize = __webpack_require__(/*! sequelize */ \"sequelize?9308\");\nconst sequelize = new Sequelize(\"mysql://Louis:@localhost:3306/predictor\", {\n    pool: {\n        max: 5,\n        min: 0,\n        acquire: 30000,\n        idle: 10000\n    }\n});\ntry {\n    sequelize.authenticate();\n    console.log(\"Connection has been established successfully.\");\n} catch (error) {\n    console.error(\"Unable to connect to the database:\", error);\n}\nmodule.exports = sequelize;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9EYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxpQ0FBVyxDQUFDO0FBRXRDLE1BQU1DLFNBQVMsR0FBRyxJQUFJRixTQUFTLENBQUMseUNBQXlDLEVBQUU7SUFDekVHLElBQUksRUFBRTtRQUNKQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxPQUFPLEVBQUUsS0FBSztRQUNkQyxJQUFJLEVBQUUsS0FBSztLQUNaO0NBQ0YsQ0FBQztBQUlGLElBQUk7SUFDRkwsU0FBUyxDQUFDTSxZQUFZLEVBQUUsQ0FBQztJQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztDQUM5RCxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNkRixPQUFPLENBQUNFLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRUEsS0FBSyxDQUFDLENBQUM7Q0FDNUQ7QUFFREMsTUFBTSxDQUFDQyxPQUFPLEdBQUdYLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWNhdG9ybmV4dC8uL2RhdGFiYXNlL0RhdGFiYXNlLmpzP2Y2M2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKCdteXNxbDovL0xvdWlzOkBsb2NhbGhvc3Q6MzMwNi9wcmVkaWN0b3InLCB7XHJcbiAgcG9vbDoge1xyXG4gICAgbWF4OiA1LFxyXG4gICAgbWluOiAwLFxyXG4gICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICBpZGxlOiAxMDAwMFxyXG4gIH1cclxufSlcclxuXHJcblxyXG5cclxudHJ5IHtcclxuICBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XHJcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZTonLCBlcnJvcik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2VxdWVsaXplICBcclxuIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJzZXF1ZWxpemUiLCJwb29sIiwibWF4IiwibWluIiwiYWNxdWlyZSIsImlkbGUiLCJhdXRoZW50aWNhdGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./database/Database.js\n");

/***/ }),

/***/ "(api)/./model/Predictions.js":
/*!******************************!*\
  !*** ./model/Predictions.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { DataTypes , Model  } = __webpack_require__(/*! sequelize */ \"sequelize?9308\");\nconst sequelize = __webpack_require__(/*! ../../../../../../database/Database */ \"(api)/./database/Database.js\");\nconst Predictions = sequelize.define(\"predictions\", {\n    // Model attributes are defined here\n    id: {\n        type: DataTypes.INTEGER,\n        allowNull: false,\n        primaryKey: true,\n        autoIncrement: true\n    },\n    name: {\n        type: DataTypes.STRING\n    },\n    result: {\n        type: DataTypes.STRING\n    }\n}, {\n    uniqueKeys: {\n        actions_unique: {\n            fields: [\n                \"id\"\n            ]\n        }\n    },\n    // Other model options go   \n    sequelize,\n    modelName: \"Predictions\" // We need to choose the model name\n});\n// the defined model is the class itself\nconsole.log(Predictions === sequelize.models.Predictions); // true\nmodule.exports = Predictions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9QcmVkaWN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sRUFBRUEsU0FBUyxHQUFFQyxLQUFLLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyxpQ0FBVyxDQUFDO0FBRWpELE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyx5RUFBb0IsQ0FBQztBQUUvQyxNQUFNRSxXQUFXLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGFBQWEsRUFBRTtJQUNsRCxvQ0FBb0M7SUFFcENDLEVBQUUsRUFBRTtRQUNGQyxJQUFJLEVBQUVQLFNBQVMsQ0FBQ1EsT0FBTztRQUN2QkMsU0FBUyxFQUFFLEtBQUs7UUFDaEJDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxhQUFhLEVBQUUsSUFBSTtLQUVwQjtJQUNEQyxJQUFJLEVBQUU7UUFDSkwsSUFBSSxFQUFFUCxTQUFTLENBQUNhLE1BQU07S0FDdkI7SUFDREMsTUFBTSxFQUFFO1FBQ05QLElBQUksRUFBRVAsU0FBUyxDQUFDYSxNQUFNO0tBQ3ZCO0NBRUYsRUFBRTtJQUNERSxVQUFVLEVBQUU7UUFDVkMsY0FBYyxFQUFFO1lBQ2RDLE1BQU0sRUFBRTtnQkFBQyxJQUFJO2FBQUM7U0FDZjtLQUNGO0lBQ0QsNEJBQTRCO0lBQzVCZCxTQUFTO0lBQ1RlLFNBQVMsRUFBRSxhQUFhLENBQUMsbUNBQW1DO0NBQzdELENBQUM7QUFFRix3Q0FBd0M7QUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsV0FBVyxLQUFLRCxTQUFTLENBQUNrQixNQUFNLENBQUNqQixXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFFbEVrQixNQUFNLENBQUNDLE9BQU8sR0FBR25CLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVkaWNhdG9ybmV4dC8uL21vZGVsL1ByZWRpY3Rpb25zLmpzPzlhYzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBEYXRhVHlwZXMsIE1vZGVsIH0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IHJlcXVpcmUoJy9kYXRhYmFzZS9EYXRhYmFzZScpXHJcblxyXG5jb25zdCBQcmVkaWN0aW9ucyA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3ByZWRpY3Rpb25zJywge1xyXG4gIC8vIE1vZGVsIGF0dHJpYnV0ZXMgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuICBpZDoge1xyXG4gICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXHJcbiAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgcHJpbWFyeUtleTogdHJ1ZSxcclxuICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcclxuXHJcbiAgfSxcclxuICBuYW1lOiB7XHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HXHJcbiAgfSxcclxuICByZXN1bHQ6IHtcclxuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkdcclxuICB9LFxyXG5cclxufSwge1xyXG4gIHVuaXF1ZUtleXM6IHtcclxuICAgIGFjdGlvbnNfdW5pcXVlOiB7XHJcbiAgICAgIGZpZWxkczogWydpZCddXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBPdGhlciBtb2RlbCBvcHRpb25zIGdvICAgXHJcbiAgc2VxdWVsaXplLCAvLyBXZSBuZWVkIHRvIHBhc3MgdGhlIGNvbm5lY3Rpb24gaW5zdGFuY2VcclxuICBtb2RlbE5hbWU6ICdQcmVkaWN0aW9ucycgLy8gV2UgbmVlZCB0byBjaG9vc2UgdGhlIG1vZGVsIG5hbWVcclxufSk7XHJcblxyXG4vLyB0aGUgZGVmaW5lZCBtb2RlbCBpcyB0aGUgY2xhc3MgaXRzZWxmXHJcbmNvbnNvbGUubG9nKFByZWRpY3Rpb25zID09PSBzZXF1ZWxpemUubW9kZWxzLlByZWRpY3Rpb25zKTsgLy8gdHJ1ZVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQcmVkaWN0aW9ucyBcclxuIl0sIm5hbWVzIjpbIkRhdGFUeXBlcyIsIk1vZGVsIiwicmVxdWlyZSIsInNlcXVlbGl6ZSIsIlByZWRpY3Rpb25zIiwiZGVmaW5lIiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsImFsbG93TnVsbCIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwibmFtZSIsIlNUUklORyIsInJlc3VsdCIsInVuaXF1ZUtleXMiLCJhY3Rpb25zX3VuaXF1ZSIsImZpZWxkcyIsIm1vZGVsTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/Predictions.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/sequelize-adapter */ \"@next-auth/sequelize-adapter\");\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sequelize */ \"sequelize?5b59\");\n/* harmony import */ var _database_Database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../database/Database */ \"(api)/./database/Database.js\");\n/* harmony import */ var _database_Database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_database_Database__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_3__]);\nsequelize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Predictions = __webpack_require__(/*! ../../../../../../model/Predictions */ \"(api)/./model/Predictions.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    adapter: _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2___default()((_database_Database__WEBPACK_IMPORTED_MODULE_4___default()), {\n        models: {\n            User: _database_Database__WEBPACK_IMPORTED_MODULE_4___default().define(\"users\", {\n                ..._next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__.models.User,\n                winstreak: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.INTEGER,\n                isAdmin: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.INTEGER\n            }),\n            Predictions: _database_Database__WEBPACK_IMPORTED_MODULE_4___default().define(\"predictions\", {\n                name: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.TEXT,\n                end: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.INTEGER\n            }),\n            Participations: _database_Database__WEBPACK_IMPORTED_MODULE_4___default().define(\"participations\", {\n                userId: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.STRING,\n                name: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.STRING,\n                response: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.STRING,\n                prediId: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.STRING\n            })\n        }\n    }),\n    callbacks: {\n        async redirect ({ url , baseUrl  }) {\n            // Allows relative callback URLs\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return baseUrl;\n        },\n        async session ({ session , token , user  }) {\n            console.log(\"in session callback,\", session, token, user);\n            if (token) {\n                session.id = token.id;\n            }\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            console.log(\"in jwt user =\", user, account, profile, isNewUser);\n            console.log(user);\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    },\n    session: {\n        jwt: true\n    },\n    jwt: {\n        encryption: true,\n        secret: process.env.JWT_OP_SECRET\n    },\n    secret: process.env.JWT_OP_SECRET\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDd0I7QUFDZTtBQUN2QjtBQUNoRCxNQUFNTSxXQUFXLEdBQUdDLG1CQUFPLENBQUMseUVBQW9CLENBQUM7QUFFUDtBQUsxQyxpRUFBZVAsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRTLFNBQVMsRUFBRTtRQUNUUixpRUFBYyxDQUFDO1lBQ2JTLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxNQUFNLEVBQUUsU0FBUztvQkFDakJDLFdBQVcsRUFBRSxTQUFTO29CQUN0QkMsYUFBYSxFQUFFLE1BQU07aUJBQ3RCO2FBQ0Y7U0FFRixDQUFDO0tBRUg7SUFDREMsT0FBTyxFQUFFbkIsbUVBQWdCLENBQUNNLDJEQUFTLEVBQUU7UUFDbkNMLE1BQU0sRUFBRTtZQUNObUIsSUFBSSxFQUFFZCxnRUFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLEdBQUdMLHFFQUFXO2dCQUNkcUIsU0FBUyxFQUFFbkIsd0RBQWlCO2dCQUM1QnFCLE9BQU8sRUFBRXJCLHdEQUFpQjthQUMzQixDQUFDO1lBQ0ZDLFdBQVcsRUFBRUUsZ0VBQWdCLENBQUMsYUFBYSxFQUFFO2dCQUMzQ21CLElBQUksRUFBRXRCLHFEQUFjO2dCQUNwQndCLEdBQUcsRUFBRXhCLHdEQUFpQjthQUN2QixDQUFDO1lBQ0Z5QixjQUFjLEVBQUV0QixnRUFBZ0IsQ0FBQyxnQkFBZ0IsRUFBQztnQkFDaER1QixNQUFNLEVBQUUxQix1REFBZ0I7Z0JBQ3hCc0IsSUFBSSxFQUFFdEIsdURBQWdCO2dCQUN0QjRCLFFBQVEsRUFBRTVCLHVEQUFnQjtnQkFDMUI2QixPQUFPLEVBQUU3Qix1REFBZ0I7YUFFMUIsQ0FBQztTQUNIO0tBQ0YsQ0FDQTtJQUVEOEIsU0FBUyxFQUFFO1FBSVQsTUFBTUMsUUFBUSxFQUFDLEVBQUVDLEdBQUcsR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFJL0IsZ0NBQWdDO1lBQ2hDLElBQUlELEdBQUcsQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFRCxPQUFPLENBQUMsRUFBRUQsR0FBRyxDQUFDLENBQUM7aUJBRzdDLElBQUksSUFBSUcsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0ksTUFBTSxLQUFLSCxPQUFPLEVBQUUsT0FBT0QsR0FBRztZQUNwRCxPQUFPQyxPQUFPO1NBQ2Y7UUFDRCxNQUFNSSxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxFQUFFO1lBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRUosT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksQ0FBQztZQUl6RCxJQUFJRCxLQUFLLEVBQUU7Z0JBQ1RELE9BQU8sQ0FBQ0ssRUFBRSxHQUFHSixLQUFLLENBQUNJLEVBQUUsQ0FBQzthQUV2QjtZQUtELE9BQU9MLE9BQU87U0FFZjtRQUNELE1BQU1NLEdBQUcsRUFBQyxFQUFFTCxLQUFLLEdBQUVDLElBQUksR0FBRUssT0FBTyxHQUFFQyxPQUFPLEdBQUVDLFNBQVMsR0FBRSxFQUFFO1lBQ3RETixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLElBQUksRUFBRUssT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQztZQU8vRE4sT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztZQUNqQixJQUFJQSxJQUFJLEVBQUU7Z0JBQ1JELEtBQUssQ0FBQ0ksRUFBRSxHQUFHSCxJQUFJLENBQUNHLEVBQUUsQ0FBQzthQUNwQjtZQUVELE9BQU9KLEtBQUs7U0FDYjtLQUVGO0lBRURELE9BQU8sRUFBRTtRQUNQTSxHQUFHLEVBQUUsSUFBSTtLQUNWO0lBQ0RBLEdBQUcsRUFBRTtRQUNISSxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsTUFBTSxFQUFFMUMsT0FBTyxDQUFDQyxHQUFHLENBQUMwQyxhQUFhO0tBRWxDO0lBQ0RELE1BQU0sRUFBRTFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMEMsYUFBYTtDQUVsQyxDQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZGljYXRvcm5leHQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBTZXF1ZWxpemVBZGFwdGVyLCB7IG1vZGVscyB9IGZyb20gXCJAbmV4dC1hdXRoL3NlcXVlbGl6ZS1hZGFwdGVyXCJcclxuaW1wb3J0IFNlcXVlbGl6ZSwgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCJcclxuY29uc3QgUHJlZGljdGlvbnMgPSByZXF1aXJlKCcvbW9kZWwvUHJlZGljdGlvbnMnKVxyXG5cclxuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICcvZGF0YWJhc2UvRGF0YWJhc2UnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHByb21wdDogXCJjb25zZW50XCIsXHJcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIF0sXHJcbiAgYWRhcHRlcjogU2VxdWVsaXplQWRhcHRlcihzZXF1ZWxpemUsIHtcclxuICAgIG1vZGVsczoge1xyXG4gICAgICBVc2VyOiBzZXF1ZWxpemUuZGVmaW5lKFwidXNlcnNcIiwge1xyXG4gICAgICAgIC4uLm1vZGVscy5Vc2VyLFxyXG4gICAgICAgIHdpbnN0cmVhazogRGF0YVR5cGVzLklOVEVHRVIsXHJcbiAgICAgICAgaXNBZG1pbjogRGF0YVR5cGVzLklOVEVHRVJcclxuICAgICAgfSksXHJcbiAgICAgIFByZWRpY3Rpb25zOiBzZXF1ZWxpemUuZGVmaW5lKFwicHJlZGljdGlvbnNcIiwge1xyXG4gICAgICAgIG5hbWU6IERhdGFUeXBlcy5URVhULFxyXG4gICAgICAgIGVuZDogRGF0YVR5cGVzLklOVEVHRVJcclxuICAgICAgfSksXHJcbiAgICAgIFBhcnRpY2lwYXRpb25zOiBzZXF1ZWxpemUuZGVmaW5lKFwicGFydGljaXBhdGlvbnNcIix7XHJcbiAgICAgICAgdXNlcklkOiBEYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgICAgIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgcmVzcG9uc2U6IERhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICAgICAgcHJlZGlJZDogRGF0YVR5cGVzLlNUUklOR1xyXG5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgKSxcclxuXHJcbiAgY2FsbGJhY2tzOiB7XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIEFsbG93cyByZWxhdGl2ZSBjYWxsYmFjayBVUkxzXHJcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi9cIikpIHJldHVybiBgJHtiYXNlVXJsfSR7dXJsfWBcclxuXHJcbiAgICAgIC8vIEFsbG93cyBjYWxsYmFjayBVUkxzIG9uIHRoZSBzYW1lIG9yaWdpblxyXG4gICAgICBlbHNlIGlmIChuZXcgVVJMKHVybCkub3JpZ2luID09PSBiYXNlVXJsKSByZXR1cm4gdXJsXHJcbiAgICAgIHJldHVybiBiYXNlVXJsXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJpbiBzZXNzaW9uIGNhbGxiYWNrLFwiLCBzZXNzaW9uLCB0b2tlbiwgdXNlcilcclxuXHJcblxyXG5cclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgc2Vzc2lvbi5pZCA9IHRva2VuLmlkO1xyXG5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW4gand0IHVzZXIgPVwiLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH1cclxuXHJcbiAgfSxcclxuXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgand0OiB0cnVlLFxyXG4gIH0sXHJcbiAgand0OiB7XHJcbiAgICBlbmNyeXB0aW9uOiB0cnVlLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfT1BfU0VDUkVUXHJcblxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfT1BfU0VDUkVUXHJcblxyXG59XHJcbilcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJTZXF1ZWxpemVBZGFwdGVyIiwibW9kZWxzIiwiU2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiUHJlZGljdGlvbnMiLCJyZXF1aXJlIiwic2VxdWVsaXplIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJhZGFwdGVyIiwiVXNlciIsImRlZmluZSIsIndpbnN0cmVhayIsIklOVEVHRVIiLCJpc0FkbWluIiwibmFtZSIsIlRFWFQiLCJlbmQiLCJQYXJ0aWNpcGF0aW9ucyIsInVzZXJJZCIsIlNUUklORyIsInJlc3BvbnNlIiwicHJlZGlJZCIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInN0YXJ0c1dpdGgiLCJVUkwiLCJvcmlnaW4iLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImlkIiwiand0IiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiLCJlbmNyeXB0aW9uIiwic2VjcmV0IiwiSldUX09QX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();