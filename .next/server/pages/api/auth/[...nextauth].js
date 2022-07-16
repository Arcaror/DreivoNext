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

eval("\nconst Sequelize = __webpack_require__(/*! sequelize */ \"sequelize?9308\");\nconst sequelize = new Sequelize(\"postgres://postgres:boosqllol@localhost:5432/predictor\");\ntry {\n    sequelize.authenticate();\n    console.log(\"Connection has been established successfully.\");\n} catch (error) {\n    console.error(\"Unable to connect to the database:\", error);\n}\nmodule.exports = sequelize;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9EYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxpQ0FBVyxDQUFDO0FBRXRDLE1BQU1DLFNBQVMsR0FBRyxJQUFJRixTQUFTLENBQUMsd0RBQXdELENBQUM7QUFJekYsSUFBSTtJQUNBRSxTQUFTLENBQUNDLFlBQVksRUFBRSxDQUFDO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0NBQzlELENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQ2RGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLG9DQUFvQyxFQUFFQSxLQUFLLENBQUMsQ0FBQztDQUM1RDtBQUVGQyxNQUFNLENBQUNDLE9BQU8sR0FBR04sU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY2F0b3JuZXh0Ly4vZGF0YWJhc2UvRGF0YWJhc2UuanM/ZjYzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoJ3Bvc3RncmVzOi8vcG9zdGdyZXM6Ym9vc3FsbG9sQGxvY2FsaG9zdDo1NDMyL3ByZWRpY3RvcicpXHJcblxyXG4gIFxyXG5cclxudHJ5IHtcclxuICAgIHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKTtcclxuICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsIGVycm9yKTtcclxuIH1cclxuIFxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlcXVlbGl6ZSAgXHJcbiJdLCJuYW1lcyI6WyJTZXF1ZWxpemUiLCJyZXF1aXJlIiwic2VxdWVsaXplIiwiYXV0aGVudGljYXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/Database.js\n");

/***/ }),

/***/ "(api)/./model/Players.js":
/*!**************************!*\
  !*** ./model/Players.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { DataTypes , Model  } = __webpack_require__(/*! sequelize */ \"sequelize?9308\");\nconst sequelize = __webpack_require__(/*! ../../../../../../database/Database */ \"(api)/./database/Database.js\");\nconst Players = sequelize.define(\"players\", {\n    // Model attributes are defined here\n    id: {\n        type: DataTypes.INTEGER,\n        allowNull: false,\n        primaryKey: true,\n        autoIncrement: true\n    },\n    idGoogle: {\n        type: DataTypes.STRING\n    },\n    name: {\n        type: DataTypes.STRING\n    },\n    email: {\n        type: DataTypes.STRING\n    },\n    image: {\n        type: DataTypes.STRING\n    },\n    winstreak: {\n        type: DataTypes.INTEGER\n    },\n    isAdmin: {\n        type: DataTypes.INTEGER\n    }\n}, {\n    uniqueKeys: {\n        actions_unique: {\n            fields: [\n                \"id\"\n            ]\n        }\n    },\n    // Other model options go   \n    sequelize,\n    modelName: \"Players\" // We need to choose the model name\n});\n// the defined model is the class itself\nconsole.log(Players === sequelize.models.Players); // true\nmodule.exports = Players;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9QbGF5ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxFQUFFQSxTQUFTLEdBQUVDLEtBQUssR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGlDQUFXLENBQUM7QUFFakQsTUFBTUMsU0FBUyxHQUFHRCxtQkFBTyxDQUFDLHlFQUFvQixDQUFDO0FBRS9DLE1BQU1FLE9BQU8sR0FBR0QsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxFQUFFO0lBQzFDLG9DQUFvQztJQUVwQ0MsRUFBRSxFQUFFO1FBQ0ZDLElBQUksRUFBRVAsU0FBUyxDQUFDUSxPQUFPO1FBQ3ZCQyxTQUFTLEVBQUUsS0FBSztRQUNoQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLGFBQWEsRUFBRSxJQUFJO0tBRXBCO0lBQ0RDLFFBQVEsRUFBRTtRQUNSTCxJQUFJLEVBQUVQLFNBQVMsQ0FBQ2EsTUFBTTtLQUV2QjtJQUNEQyxJQUFJLEVBQUU7UUFDSlAsSUFBSSxFQUFFUCxTQUFTLENBQUNhLE1BQU07S0FFdkI7SUFDREUsS0FBSyxFQUFFO1FBQ0xSLElBQUksRUFBRVAsU0FBUyxDQUFDYSxNQUFNO0tBRXZCO0lBQ0RHLEtBQUssRUFBRTtRQUNMVCxJQUFJLEVBQUVQLFNBQVMsQ0FBQ2EsTUFBTTtLQUN2QjtJQUNESSxTQUFTLEVBQUU7UUFDVFYsSUFBSSxFQUFFUCxTQUFTLENBQUNRLE9BQU87S0FFeEI7SUFDRFUsT0FBTyxFQUFFO1FBQ1BYLElBQUksRUFBRVAsU0FBUyxDQUFDUSxPQUFPO0tBQ3hCO0NBQ0YsRUFBRTtJQUNEVyxVQUFVLEVBQUU7UUFDVkMsY0FBYyxFQUFFO1lBQ2RDLE1BQU0sRUFBRTtnQkFBQyxJQUFJO2FBQUM7U0FDZjtLQUNGO0lBQ0QsNEJBQTRCO0lBQzVCbEIsU0FBUztJQUNUbUIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxtQ0FBbUM7Q0FDekQsQ0FBQztBQUVGLHdDQUF3QztBQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixPQUFPLEtBQUtELFNBQVMsQ0FBQ3NCLE1BQU0sQ0FBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTztBQUUxRHNCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdkIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY2F0b3JuZXh0Ly4vbW9kZWwvUGxheWVycy5qcz83MWRmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRGF0YVR5cGVzLCBNb2RlbCB9ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcvZGF0YWJhc2UvRGF0YWJhc2UnKVxyXG5cclxuY29uc3QgUGxheWVycyA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3BsYXllcnMnLCB7XHJcbiAgLy8gTW9kZWwgYXR0cmlidXRlcyBhcmUgZGVmaW5lZCBoZXJlXHJcblxyXG4gIGlkOiB7XHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcclxuICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxyXG4gICAgYXV0b0luY3JlbWVudDogdHJ1ZVxyXG5cclxuICB9LFxyXG4gIGlkR29vZ2xlOiB7XHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HXHJcblxyXG4gIH0sXHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklOR1xyXG4gICAgLy8gYWxsb3dOdWxsIGRlZmF1bHRzIHRvIHRydWVcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HXHJcbiAgICAvLyBhbGxvd051bGwgZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkdcclxuICB9LFxyXG4gIHdpbnN0cmVhazoge1xyXG4gICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVJcclxuICAgIC8vIGFsbG93TnVsbCBkZWZhdWx0cyB0byB0cnVlXHJcbiAgfSxcclxuICBpc0FkbWluOiB7XHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUlxyXG4gIH1cclxufSwge1xyXG4gIHVuaXF1ZUtleXM6IHtcclxuICAgIGFjdGlvbnNfdW5pcXVlOiB7XHJcbiAgICAgIGZpZWxkczogWydpZCddXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBPdGhlciBtb2RlbCBvcHRpb25zIGdvICAgXHJcbiAgc2VxdWVsaXplLCAvLyBXZSBuZWVkIHRvIHBhc3MgdGhlIGNvbm5lY3Rpb24gaW5zdGFuY2VcclxuICBtb2RlbE5hbWU6ICdQbGF5ZXJzJyAvLyBXZSBuZWVkIHRvIGNob29zZSB0aGUgbW9kZWwgbmFtZVxyXG59KTtcclxuXHJcbi8vIHRoZSBkZWZpbmVkIG1vZGVsIGlzIHRoZSBjbGFzcyBpdHNlbGZcclxuY29uc29sZS5sb2coUGxheWVycyA9PT0gc2VxdWVsaXplLm1vZGVscy5QbGF5ZXJzKTsgLy8gdHJ1ZVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJzIFxyXG4iXSwibmFtZXMiOlsiRGF0YVR5cGVzIiwiTW9kZWwiLCJyZXF1aXJlIiwic2VxdWVsaXplIiwiUGxheWVycyIsImRlZmluZSIsImlkIiwidHlwZSIsIklOVEVHRVIiLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsImlkR29vZ2xlIiwiU1RSSU5HIiwibmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJ3aW5zdHJlYWsiLCJpc0FkbWluIiwidW5pcXVlS2V5cyIsImFjdGlvbnNfdW5pcXVlIiwiZmllbGRzIiwibW9kZWxOYW1lIiwiY29uc29sZSIsImxvZyIsIm1vZGVscyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/Players.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/sequelize-adapter */ \"@next-auth/sequelize-adapter\");\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sequelize */ \"sequelize?5b59\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_3__]);\nsequelize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Players = __webpack_require__(/*! ../../../../../../model/Players */ \"(api)/./model/Players.js\");\nconst sequelize = __webpack_require__(/*! ../../../../../../database/Database */ \"(api)/./database/Database.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    adapter: _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2___default()(sequelize, {\n        models: {\n            User: sequelize.define(\"users\", {\n                ..._next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_2__.models.User,\n                winstreak: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.INTEGER,\n                isAdmin: sequelize__WEBPACK_IMPORTED_MODULE_3__.DataTypes.INTEGER\n            })\n        }\n    }),\n    callbacks: {\n        async redirect ({ url , baseUrl  }) {\n            // Allows relative callback URLs\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return baseUrl;\n        },\n        async session ({ session , token , user  }) {\n            console.log(\"in session callback,\", session, token, user);\n            if (token) {\n                session.id = token.id;\n            }\n            return session;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            console.log(\"in jwt user =\", user, account, profile, isNewUser);\n            // Players.findOrCreate({\n            //   where: { id: token.id },\n            //   defaults: {\n            //     idgoogle: token.id,\n            //     name: profile.name,\n            //     email: profile.email,\n            //     image: profile.image,\n            //     winstreak: 0,\n            //     isAdmin: 0\n            //   },\n            // })\n            console.log(user);\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    },\n    session: {\n        jwt: true\n    },\n    jwt: {\n        encryption: true,\n        secret: process.env.JWT_OP_SECRET\n    },\n    secret: process.env.JWT_OP_SECRET\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3dCO0FBQ2U7QUFDdkI7QUFDaEQsTUFBTU0sT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGlFQUFnQixDQUFDO0FBRXpDLE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyx5RUFBb0IsQ0FBQztBQUkvQyxpRUFBZVAsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRTLFNBQVMsRUFBRTtRQUNUUixpRUFBYyxDQUFDO1lBQ2JTLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxNQUFNLEVBQUUsU0FBUztvQkFDakJDLFdBQVcsRUFBRSxTQUFTO29CQUN0QkMsYUFBYSxFQUFFLE1BQU07aUJBQ3RCO2FBQ0Y7U0FFRixDQUFDO0tBQ0g7SUFDREMsT0FBTyxFQUFFbkIsbUVBQWdCLENBQUNNLFNBQVMsRUFBRTtRQUNuQ0wsTUFBTSxFQUFFO1lBQ05tQixJQUFJLEVBQUVkLFNBQVMsQ0FBQ2UsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsR0FBR3BCLHFFQUFXO2dCQUNkcUIsU0FBUyxFQUFFbkIsd0RBQWlCO2dCQUM1QnFCLE9BQU8sRUFBRXJCLHdEQUFpQjthQUMzQixDQUVBO1NBQ0Y7S0FDRixDQUNBO0lBRURzQixTQUFTLEVBQUU7UUFJVCxNQUFNQyxRQUFRLEVBQUMsRUFBRUMsR0FBRyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtZQUkvQixnQ0FBZ0M7WUFDaEMsSUFBSUQsR0FBRyxDQUFDRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUVELE9BQU8sQ0FBQyxFQUFFRCxHQUFHLENBQUMsQ0FBQztpQkFHN0MsSUFBSSxJQUFJRyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDSSxNQUFNLEtBQUtILE9BQU8sRUFBRSxPQUFPRCxHQUFHO1lBQ3BELE9BQU9DLE9BQU87U0FDZjtRQUNELE1BQU1JLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFSixPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxDQUFDO1lBSXpELElBQUlELEtBQUssRUFBRTtnQkFDVEQsT0FBTyxDQUFDSyxFQUFFLEdBQUdKLEtBQUssQ0FBQ0ksRUFBRSxDQUFDO2FBQ3ZCO1lBUUQsT0FBT0wsT0FBTztTQUVmO1FBQ0QsTUFBTU0sR0FBRyxFQUFDLEVBQUVMLEtBQUssR0FBRUMsSUFBSSxHQUFFSyxPQUFPLEdBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEVBQUU7WUFDdEROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRUYsSUFBSSxFQUFFSyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxDQUFDO1lBRy9ELHlCQUF5QjtZQUN6Qiw2QkFBNkI7WUFDN0IsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLDRCQUE0QjtZQUM1QixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLE9BQU87WUFDUCxLQUFLO1lBTUxOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7WUFDakIsSUFBSUEsSUFBSSxFQUFFO2dCQUNSRCxLQUFLLENBQUNJLEVBQUUsR0FBR0gsSUFBSSxDQUFDRyxFQUFFLENBQUM7YUFDcEI7WUFFRCxPQUFPSixLQUFLO1NBQ2I7S0FFRjtJQUVERCxPQUFPLEVBQUU7UUFDUE0sR0FBRyxFQUFFLElBQUk7S0FDVjtJQUNEQSxHQUFHLEVBQUU7UUFDSEksVUFBVSxFQUFFLElBQUk7UUFDaEJDLE1BQU0sRUFBRWxDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0MsYUFBYTtLQUVsQztJQUNERCxNQUFNLEVBQUVsQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2tDLGFBQWE7Q0FFbEMsQ0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY2F0b3JuZXh0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgU2VxdWVsaXplQWRhcHRlciwgeyBtb2RlbHMgfSBmcm9tIFwiQG5leHQtYXV0aC9zZXF1ZWxpemUtYWRhcHRlclwiXHJcbmltcG9ydCBTZXF1ZWxpemUsIHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiXHJcbmNvbnN0IFBsYXllcnMgPSByZXF1aXJlKCcvbW9kZWwvUGxheWVycycpXHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKCcvZGF0YWJhc2UvRGF0YWJhc2UnKVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHByb21wdDogXCJjb25zZW50XCIsXHJcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgXSxcclxuICBhZGFwdGVyOiBTZXF1ZWxpemVBZGFwdGVyKHNlcXVlbGl6ZSwge1xyXG4gICAgbW9kZWxzOiB7XHJcbiAgICAgIFVzZXI6IHNlcXVlbGl6ZS5kZWZpbmUoXCJ1c2Vyc1wiLCB7XHJcbiAgICAgICAgLi4ubW9kZWxzLlVzZXIsXHJcbiAgICAgICAgd2luc3RyZWFrOiBEYXRhVHlwZXMuSU5URUdFUixcclxuICAgICAgICBpc0FkbWluOiBEYXRhVHlwZXMuSU5URUdFUlxyXG4gICAgICB9XHJcblxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gICksXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xyXG5cclxuXHJcbiBcclxuICAgICAgLy8gQWxsb3dzIHJlbGF0aXZlIGNhbGxiYWNrIFVSTHNcclxuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIGAke2Jhc2VVcmx9JHt1cmx9YFxyXG5cclxuICAgICAgLy8gQWxsb3dzIGNhbGxiYWNrIFVSTHMgb24gdGhlIHNhbWUgb3JpZ2luXHJcbiAgICAgIGVsc2UgaWYgKG5ldyBVUkwodXJsKS5vcmlnaW4gPT09IGJhc2VVcmwpIHJldHVybiB1cmxcclxuICAgICAgcmV0dXJuIGJhc2VVcmxcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIHNlc3Npb24gY2FsbGJhY2ssXCIsIHNlc3Npb24sIHRva2VuLCB1c2VyKVxyXG5cclxuXHJcblxyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBzZXNzaW9uLmlkID0gdG9rZW4uaWQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIgfSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImluIGp3dCB1c2VyID1cIiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKVxyXG5cclxuXHJcbiAgICAgIC8vIFBsYXllcnMuZmluZE9yQ3JlYXRlKHtcclxuICAgICAgLy8gICB3aGVyZTogeyBpZDogdG9rZW4uaWQgfSxcclxuICAgICAgLy8gICBkZWZhdWx0czoge1xyXG4gICAgICAvLyAgICAgaWRnb29nbGU6IHRva2VuLmlkLFxyXG4gICAgICAvLyAgICAgbmFtZTogcHJvZmlsZS5uYW1lLFxyXG4gICAgICAvLyAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgIC8vICAgICBpbWFnZTogcHJvZmlsZS5pbWFnZSxcclxuICAgICAgLy8gICAgIHdpbnN0cmVhazogMCxcclxuICAgICAgLy8gICAgIGlzQWRtaW46IDBcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH1cclxuXHJcbiAgfSxcclxuXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgand0OiB0cnVlLFxyXG4gIH0sXHJcbiAgand0OiB7XHJcbiAgICBlbmNyeXB0aW9uOiB0cnVlLFxyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfT1BfU0VDUkVUXHJcblxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfT1BfU0VDUkVUXHJcblxyXG59XHJcbilcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJTZXF1ZWxpemVBZGFwdGVyIiwibW9kZWxzIiwiU2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiUGxheWVycyIsInJlcXVpcmUiLCJzZXF1ZWxpemUiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsImFkYXB0ZXIiLCJVc2VyIiwiZGVmaW5lIiwid2luc3RyZWFrIiwiSU5URUdFUiIsImlzQWRtaW4iLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwiVVJMIiwib3JpZ2luIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImp3dCIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwiZW5jcnlwdGlvbiIsInNlY3JldCIsIkpXVF9PUF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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