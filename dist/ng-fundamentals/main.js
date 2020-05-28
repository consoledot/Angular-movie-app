(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movieslist_movies_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movieslist/movies-list.component */ "./src/app/movieslist/movies-list.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moviesearch/moviesearch.component */ "./src/app/moviesearch/moviesearch.component.ts");
/* harmony import */ var _latestmovies_latestmovies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./latestmovies/latestmovies.component */ "./src/app/latestmovies/latestmovies.component.ts");
/* harmony import */ var _fullmovie_fullmovie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fullmovie/fullmovie.component */ "./src/app/fullmovie/fullmovie.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _fullmovie_favorite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fullmovie/favorite */ "./src/app/fullmovie/favorite.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _movieslist_movies_list_component__WEBPACK_IMPORTED_MODULE_8__["MoviesListComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_11__["MoviesearchComponent"], _latestmovies_latestmovies_component__WEBPACK_IMPORTED_MODULE_12__["LatestmoviesComponent"], _fullmovie_fullmovie_component__WEBPACK_IMPORTED_MODULE_13__["FullmovieComponent"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_14__["FavoritesComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_10__["routes"]), _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [_fullmovie_favorite__WEBPACK_IMPORTED_MODULE_15__["Favorites"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"margin\">\n  <div>\n    <h2>Favourites</h2>\n  </div>\n  <div class=\"container\">\n    <div *ngIf=\"loading\" class=\"preloader\">\n      <div class=\"preloader-spin\"></div>\n    </div>\n\n    <app-movies\n      *ngFor=\"let data of datas\"\n      [data]=\"data\"\n      [loading]=\"loading\"\n    ></app-movies>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullmovie_favorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fullmovie/favorite */ "./src/app/fullmovie/favorite.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favorites) {
        this.favorites = favorites;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.datas = _this.favorites.getFavorites();
            console.log(_this.datas);
        }, 700);
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fullmovie_favorite__WEBPACK_IMPORTED_MODULE_2__["Favorites"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/fullmovie/favorite.ts":
/*!***************************************!*\
  !*** ./src/app/fullmovie/favorite.ts ***!
  \***************************************/
/*! exports provided: Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorites", function() { return Favorites; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Favorites = /** @class */ (function () {
    function Favorites() {
        this.favorites = [];
    }
    Favorites.prototype.addToFavorites = function (data) {
        this.favorites.push(data);
    };
    Favorites.prototype.getFavorites = function () {
        return this.favorites;
    };
    Favorites = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Favorites);
    return Favorites;
}());



/***/ }),

/***/ "./src/app/fullmovie/fullmovie.component.css":
/*!***************************************************!*\
  !*** ./src/app/fullmovie/fullmovie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  height: 100%;\n  margin: 0 15px;\n}\nimg {\n  margin-top: 15px;\n}\n.des {\n  margin: 15px;\n}\nspan {\n  /* justify-content: center; */\n  display: flex;\n  margin-top: 10px;\n  font-size: 20px;\n  font-weight: bolder;\n}\nbutton {\n  border: none;\n  background-color: red;\n  color: white;\n  border-radius: 5px;\n  padding: 7px;\n  margin-top: 10px;\n  cursor: pointer;\n  outline: none;\n}\n@media screen and (max-width: 900px) {\n  .flex {\n    flex-direction: column;\n  }\n  img {\n    width: 100%;\n  }\n  figcaption {\n    text-align: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbG1vdmllL2Z1bGxtb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUNEO0VBQ0U7SUFDRSx1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsbUJBQW1CO0dBQ3BCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9mdWxsbW92aWUvZnVsbG1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5pbWcge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRlcyB7XG4gIG1hcmdpbjogMTVweDtcbn1cbnNwYW4ge1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgZmlnY2FwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/fullmovie/fullmovie.component.html":
/*!****************************************************!*\
  !*** ./src/app/fullmovie/fullmovie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"preloader\">\n  <div class=\"preloader-spin\"></div>\n</div>\n<section class=\"margin flex\" *ngIf=\"!loading\">\n  <div>\n    <figure>\n      <img src=\"{{ data.Poster }}\" alt=\"\" />\n      <figcaption>{{ data.Title }} || {{ data.Year }}</figcaption>\n      <button (click)=\"Favorite(data)\">Add to Favorites</button>\n    </figure>\n  </div>\n  <div class=\"des\">\n    <div>\n      <p><span>Plot</span>{{ data.Plot }}</p>\n    </div>\n    <div>\n      <p><span>Released</span>{{ data.Released }}</p>\n    </div>\n    <div>\n      <p><span>Runtime</span>{{ data.Runtime }}</p>\n    </div>\n    <div>\n      <p><span>Writer</span>{{ data.Writer }}</p>\n    </div>\n    <div>\n      <p><span>Actors</span>{{ data.Actors }}</p>\n    </div>\n    <div>\n      <p><span>IMDB Rating</span>{{ data.imdbRating }}</p>\n    </div>\n    <div>\n      <p><span>Genre</span>{{ data.Genre }}</p>\n    </div>\n    <div>\n      <p><span>Director</span>{{ data.Director }}</p>\n    </div>\n    <div>\n      <p><span>Box Office</span>{{ data.BoxOffice }}</p>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/fullmovie/fullmovie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fullmovie/fullmovie.component.ts ***!
  \**************************************************/
/*! exports provided: FullmovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullmovieComponent", function() { return FullmovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorite */ "./src/app/fullmovie/favorite.ts");





var FullmovieComponent = /** @class */ (function () {
    function FullmovieComponent(route, http, favorites) {
        this.route = route;
        this.http = http;
        this.favorites = favorites;
    }
    FullmovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.loading = true;
        this.http.request("https://cors-everywhere.herokuapp.com/http://www.omdbapi.com/?i=" + this.id + "&plot=full&apikey=e51cc621")
            .subscribe(function (res) {
            _this.loading = false;
            _this.data = res.json();
        });
    };
    FullmovieComponent.prototype.Favorite = function (data) {
        this.favorites.addToFavorites(data);
    };
    FullmovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullmovie',
            template: __webpack_require__(/*! ./fullmovie.component.html */ "./src/app/fullmovie/fullmovie.component.html"),
            styles: [__webpack_require__(/*! ./fullmovie.component.css */ "./src/app/fullmovie/fullmovie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _favorite__WEBPACK_IMPORTED_MODULE_4__["Favorites"]])
    ], FullmovieComponent);
    return FullmovieComponent;
}());



/***/ }),

/***/ "./src/app/latestmovies/latest.ts":
/*!****************************************!*\
  !*** ./src/app/latestmovies/latest.ts ***!
  \****************************************/
/*! exports provided: latest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latest", function() { return latest; });
var latest = [
    {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "Title": "Avengers:Endgame",
        "Year": "2019",
        "imdbID": "tt4154796"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
        "Title": "Captain Marvel",
        "Year": "2019",
        "imdbID": "tt4154664"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTczMzc4NDY0MF5BMl5BanBnXkFtZTgwMjI3Njg3NjM@._V1_SX300.jpg",
        "Title": "The Intruder",
        "Year": "2019",
        "imdbID": "tt6722030"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNjE2NjIwOF5BMl5BanBnXkFtZTgwMjE0MzkxNzM@._V1_SX300.jpg",
        "Title": "What Men What",
        "Year": "2019",
        "imdbID": "tt7634968"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Title": "Spider-Man: Far from Home",
        "Year": "2019",
        "imdbID": "tt6320628"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
        "Title": "Shazam!",
        "Year": "2019",
        "imdbID": "tt0448115"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwNDgxNTI0M15BMl5BanBnXkFtZTgwNTY4MDI1NzM@._V1_SX300.jpg",
        "Title": "Dark Phoenix",
        "Year": "2019",
        "imdbID": "tt6565702"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg",
        "Title": "Alita: Battle Angel",
        "Year": "2019",
        "imdbID": "tt0437086"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Title": "Joker",
        "Year": "2019",
        "imdbID": "tt7286456"
    }, {
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg",
        "Title": "Toy Story 4",
        "Year": "2019",
        "imdbID": "tt1979376"
    }
];


/***/ }),

/***/ "./src/app/latestmovies/latestmovies.component.css":
/*!*********************************************************!*\
  !*** ./src/app/latestmovies/latestmovies.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n}\nh2 {\n  text-align: center;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF0ZXN0bW92aWVzL2xhdGVzdG1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDZEQUE2RDtFQUM3RCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF0ZXN0bW92aWVzL2xhdGVzdG1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/latestmovies/latestmovies.component.html":
/*!**********************************************************!*\
  !*** ./src/app/latestmovies/latestmovies.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"margin\">\n  <div>\n    <h2>Trending Movies</h2>\n  </div>\n  <div class=\"container\">\n    <div *ngIf=\"loading\" class=\"preloader\">\n      <div class=\"preloader-spin\"></div>\n    </div>\n\n    <app-movies\n      *ngFor=\"let data of datas\"\n      [data]=\"data\"\n      [loading]=\"loading\"\n    ></app-movies>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/latestmovies/latestmovies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/latestmovies/latestmovies.component.ts ***!
  \********************************************************/
/*! exports provided: LatestmoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestmoviesComponent", function() { return LatestmoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _latest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./latest */ "./src/app/latestmovies/latest.ts");



var LatestmoviesComponent = /** @class */ (function () {
    function LatestmoviesComponent() {
    }
    LatestmoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.datas = _latest__WEBPACK_IMPORTED_MODULE_2__["latest"];
            _this.loading = false;
        }, 700);
    };
    LatestmoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latestmovies',
            template: __webpack_require__(/*! ./latestmovies.component.html */ "./src/app/latestmovies/latestmovies.component.html"),
            styles: [__webpack_require__(/*! ./latestmovies.component.css */ "./src/app/latestmovies/latestmovies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestmoviesComponent);
    return LatestmoviesComponent;
}());



/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.css":
/*!*******************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n}\n.search {\n  margin-top: 20vh;\n  text-align: center;\n}\nform {\n  display: flex;\n  margin-top: 5px;\n  width: 90%;\n  justify-content: center;\n}\n@media screen and (max-width: 500px) {\n  form {\n    margin-top: 8px;\n    width: 100%;\n  }\n  form input[type=\"text\"] {\n    width: 90%;\n  }\n}\ninput {\n  border: none;\n  outline: none;\n}\nform input[type=\"submit\"] {\n  padding: 5px;\n  color: white;\n  text-transform: uppercase;\n  background-color: red;\n  border-radius: 3px;\n  margin-left: 10px;\n}\nform input[type=\"text\"] {\n  width: 70%;\n  border: 2px solid red;\n  padding-left: 10px;\n}\ninput[type=\"text\"]:focus {\n  background-color: rgb(248, 83, 83);\n  color: white;\n  border: 2px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzZWFyY2gvbW92aWVzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCw2REFBNkQ7RUFDN0QsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0dBQ2I7RUFDRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzZWFyY2gvbW92aWVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAyMHB4O1xufVxuLnNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICB3aWR0aDogNzAlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgODMsIDgzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.html":
/*!********************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"margin\">\n  <div>\n    <form action=\"\" #f=\"ngForm\" (ngSubmit)=\"Search(f.value)\">\n      <input type=\"text\" name=\"search\" id=\"\" autofocus ngModel />\n      <input type=\"submit\" value=\"Search\" />\n    </form>\n  </div>\n  <div *ngIf=\"!searched\" class=\"search\">\n    <h2>{{ text }}</h2>\n  </div>\n  <div class=\"container\">\n    <div *ngIf=\"loading\" class=\"preloader\">\n      <div class=\"preloader-spin\"></div>\n    </div>\n    <app-movies\n      *ngFor=\"let data of datas\"\n      [data]=\"data\"\n      [loading]=\"loading\"\n    ></app-movies>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.ts":
/*!******************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesearchComponent", function() { return MoviesearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var MoviesearchComponent = /** @class */ (function () {
    function MoviesearchComponent(http) {
        this.http = http;
    }
    MoviesearchComponent.prototype.ngOnInit = function () {
        this.searched = false;
        this.text = 'You have not Search for any Movies';
    };
    MoviesearchComponent.prototype.Search = function (value) {
        var _this = this;
        this.loading = true;
        this.searched = true;
        this.datas = [];
        this.http.request("https://cors-everywhere.herokuapp.com/http://www.omdbapi.com/?s=" + value.search + "&plot=full&apikey=e51cc621")
            .subscribe(function (res) {
            _this.datas = res.json().Search;
            _this.loading = false;
        });
        return false;
    };
    MoviesearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moviesearch',
            template: __webpack_require__(/*! ./moviesearch.component.html */ "./src/app/moviesearch/moviesearch.component.html"),
            styles: [__webpack_require__(/*! ./moviesearch.component.css */ "./src/app/moviesearch/moviesearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MoviesearchComponent);
    return MoviesearchComponent;
}());



/***/ }),

/***/ "./src/app/movieslist/movies-list.component.css":
/*!******************************************************!*\
  !*** ./src/app/movieslist/movies-list.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 95%;\n  margin: 5px auto;\n}\n.card img {\n  width: 100%;\n  height: 400px;\n  padding-bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.row {\n  padding-top: 0;\n  display: flex;\n  justify-content: space-around;\n  background-color: red;\n  color: white;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQW9CO0tBQXBCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXNsaXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG4uY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4ucm93IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/movieslist/movies-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/movieslist/movies-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [routerLink]=\"['/movie', data.imdbID]\">\n  <img src=\"{{ data.Poster }}\" alt=\"\" />\n  <div class=\"row\">\n    <h5 class=\"\">{{ data.Title }}</h5>\n    <p>{{ data.Year }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movieslist/movies-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/movieslist/movies-list.component.ts ***!
  \*****************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent() {
    }
    MoviesListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MoviesListComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviesListComponent.prototype, "data", void 0);
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/movieslist/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/movieslist/movies-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-header {\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  width: 100%;\n  background-color: #e50914;\n  z-index: 5;\n  height: 7%;\n  align-items: center;\n}\n.top-header > * {\n  cursor: pointer;\n}\n.white {\n  color: white;\n}\ni {\n  outline: none;\n}\n@media screen and (max-width: 500px) {\n  .top-header {\n    bottom: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRTtJQUNFLFVBQVU7R0FDWDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUwOTE0O1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDclO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1oZWFkZXIgPiAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudG9wLWhlYWRlciB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"top-header\">\n  <div class=\"home\">\n    <i class=\"material-icons\" [routerLink]=\"['/home']\" routerLinkActive=\"white\"\n      >home</i\n    >\n  </div>\n  <div class=\"search\">\n    <i\n      class=\"material-icons\"\n      [routerLink]=\"['/search']\"\n      routerLinkActive=\"white\"\n      >search</i\n    >\n  </div>\n  <div class=\"favorite\">\n    <i\n      class=\"material-icons\"\n      [routerLink]=\"['/favorites']\"\n      routerLinkActive=\"white\"\n      >list</i\n    >\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _latestmovies_latestmovies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latestmovies/latestmovies.component */ "./src/app/latestmovies/latestmovies.component.ts");
/* harmony import */ var _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviesearch/moviesearch.component */ "./src/app/moviesearch/moviesearch.component.ts");
/* harmony import */ var _fullmovie_fullmovie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullmovie/fullmovie.component */ "./src/app/fullmovie/fullmovie.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _latestmovies_latestmovies_component__WEBPACK_IMPORTED_MODULE_0__["LatestmoviesComponent"] },
    { path: 'search', component: _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_1__["MoviesearchComponent"] },
    { path: 'movie/:id', component: _fullmovie_fullmovie_component__WEBPACK_IMPORTED_MODULE_2__["FullmovieComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/consoledot/Documents/WORK/100DaysofCode/NETFLEX/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map