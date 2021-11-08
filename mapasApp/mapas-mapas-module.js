(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapas-mapas-module"],{

/***/ "1j4D":
/*!*******************************************************************!*\
  !*** ./src/app/mapas/components/mini-mapa/mini-mapa.component.ts ***!
  \*******************************************************************/
/*! exports provided: MiniMapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniMapaComponent", function() { return MiniMapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = ["mapa"];
class MiniMapaComponent {
    constructor() {
        this.lngLat = [0, 0];
    }
    ngAfterViewInit() {
        const mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.lngLat,
            zoom: 15,
            interactive: false
        });
        new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"]()
            .setLngLat(this.lngLat)
            .addTo(mapa);
    }
}
MiniMapaComponent.ɵfac = function MiniMapaComponent_Factory(t) { return new (t || MiniMapaComponent)(); };
MiniMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiniMapaComponent, selectors: [["app-mini-mapa"]], viewQuery: function MiniMapaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMapa = _t.first);
    } }, inputs: { lngLat: "lngLat" }, decls: 2, vars: 0, consts: [["mapa", ""]], template: function MiniMapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, styles: ["div[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 150px;\n        margin: 0px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mini-mapa',
                templateUrl: './mini-mapa.component.html',
                styles: [
                    `
      div {
        width: 100%;
        height: 150px;
        margin: 0px;
      }
    `
                ]
            }]
    }], function () { return []; }, { lngLat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], divMapa: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapa']
        }] }); })();


/***/ }),

/***/ "9pgY":
/*!***********************************************!*\
  !*** ./src/app/mapas/mapas-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MapasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapasRoutingModule", function() { return MapasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/full-screen/full-screen.component */ "Xdc8");
/* harmony import */ var _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/zoom-range/zoom-range.component */ "X8r5");
/* harmony import */ var _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/marcadores/marcadores.component */ "YDeP");
/* harmony import */ var _pages_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/propiedades/propiedades.component */ "vVBX");








const routes = [
    {
        path: '',
        children: [
            { path: 'fullscreen', component: _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_2__["FullScreenComponent"] },
            { path: 'zoom-range', component: _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_3__["ZoomRangeComponent"] },
            { path: 'marcadores', component: _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_4__["MarcadoresComponent"] },
            { path: 'propiedades', component: _pages_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_5__["PropiedadesComponent"] },
            { path: '**', redirectTo: 'fullscreen' },
        ]
    }
];
class MapasRoutingModule {
}
MapasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapasRoutingModule });
MapasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapasRoutingModule_Factory(t) { return new (t || MapasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "NnOM":
/*!***************************************!*\
  !*** ./src/app/mapas/mapas.module.ts ***!
  \***************************************/
/*! exports provided: MapasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapasModule", function() { return MapasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mapas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapas-routing.module */ "9pgY");
/* harmony import */ var _components_mini_mapa_mini_mapa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mini-mapa/mini-mapa.component */ "1j4D");
/* harmony import */ var _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/full-screen/full-screen.component */ "Xdc8");
/* harmony import */ var _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/marcadores/marcadores.component */ "YDeP");
/* harmony import */ var _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/zoom-range/zoom-range.component */ "X8r5");
/* harmony import */ var _pages_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/propiedades/propiedades.component */ "vVBX");









class MapasModule {
}
MapasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapasModule });
MapasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapasModule_Factory(t) { return new (t || MapasModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _mapas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapasRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapasModule, { declarations: [_components_mini_mapa_mini_mapa_component__WEBPACK_IMPORTED_MODULE_3__["MiniMapaComponent"],
        _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_4__["FullScreenComponent"],
        _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_5__["MarcadoresComponent"],
        _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_6__["ZoomRangeComponent"],
        _pages_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_7__["PropiedadesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mapas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapasRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_mini_mapa_mini_mapa_component__WEBPACK_IMPORTED_MODULE_3__["MiniMapaComponent"],
                    _pages_full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_4__["FullScreenComponent"],
                    _pages_marcadores_marcadores_component__WEBPACK_IMPORTED_MODULE_5__["MarcadoresComponent"],
                    _pages_zoom_range_zoom_range_component__WEBPACK_IMPORTED_MODULE_6__["ZoomRangeComponent"],
                    _pages_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_7__["PropiedadesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mapas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapasRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "X8r5":
/*!****************************************************************!*\
  !*** ./src/app/mapas/pages/zoom-range/zoom-range.component.ts ***!
  \****************************************************************/
/*! exports provided: ZoomRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomRangeComponent", function() { return ZoomRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["mapa"];
class ZoomRangeComponent {
    constructor() {
        this.zoomLevel = 10;
        this.center = [-75.921029433568, 45.28719674822362];
    }
    ngOnDestroy() {
        this.mapa.off('zoom', () => { });
        this.mapa.off('zoomend', () => { });
        this.mapa.off('move', () => { });
    }
    ngAfterViewInit() {
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.center,
            zoom: this.zoomLevel
        });
        this.mapa.on('zoom', (ev) => {
            this.zoomLevel = this.mapa.getZoom();
        });
        this.mapa.on('zoomend', (ev) => {
            if (this.mapa.getZoom() > 18) {
                this.mapa.zoomTo(18);
            }
        });
        // Movimiento del mapa
        this.mapa.on('move', (event) => {
            const target = event.target;
            const { lng, lat } = target.getCenter();
            this.center = [lng, lat];
        });
    }
    zoomOut() {
        this.mapa.zoomOut();
    }
    zoomIn() {
        this.mapa.zoomIn();
    }
    zoomCambio(valor) {
        this.mapa.zoomTo(Number(valor));
    }
}
ZoomRangeComponent.ɵfac = function ZoomRangeComponent_Factory(t) { return new (t || ZoomRangeComponent)(); };
ZoomRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomRangeComponent, selectors: [["app-zoom-range"]], viewQuery: function ZoomRangeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMapa = _t.first);
    } }, decls: 16, vars: 13, consts: [[1, "mapa-container"], ["mapa", ""], [1, "row"], [1, "col-12"], [1, "form-label"], ["type", "range", "min", "0", "max", "18", 1, "form-range", 3, "value", "input"], ["zoomInput", ""], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "float-end", 3, "click"]], template: function ZoomRangeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ZoomRangeComponent_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.zoomCambio(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomRangeComponent_Template_button_click_12_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomRangeComponent_Template_button_click_14_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Zoom: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, ctx.zoomLevel, "2.0-2"), " - Lng,Lat: [ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, ctx.center[0], "2.4-4"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 10, ctx.center[1], "2.4-4"), " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.zoomLevel);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".mapa-container[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%; \n    }\n\n    .row[_ngcontent-%COMP%] {\n      background-color: white;\n      border-radius: 5px;\n      bottom: 50px;\n      left: 50px;\n      padding: 10px;\n      position: fixed;\n      z-index: 999;\n      width: 400px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoom-range',
                templateUrl: './zoom-range.component.html',
                styles: [
                    `
    .mapa-container {
      height: 100%;
      width: 100%; 
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
    `
                ]
            }]
    }], function () { return []; }, { divMapa: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapa']
        }] }); })();


/***/ }),

/***/ "Xdc8":
/*!******************************************************************!*\
  !*** ./src/app/mapas/pages/full-screen/full-screen.component.ts ***!
  \******************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);



class FullScreenComponent {
    constructor() { }
    ngOnInit() {
        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: 'mapa',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-75.921029433568, 45.28719674822362],
            zoom: 18
        });
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-full-screen"]], decls: 1, vars: 0, consts: [["id", "mapa"]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#mapa[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%; \n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-screen',
                templateUrl: './full-screen.component.html',
                styles: [
                    `
    #mapa {
      height: 100%;
      width: 100%; 
    }
    `
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YDeP":
/*!****************************************************************!*\
  !*** ./src/app/mapas/pages/marcadores/marcadores.component.ts ***!
  \****************************************************************/
/*! exports provided: MarcadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcadoresComponent", function() { return MarcadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["mapa"];
const _c1 = function (a0) { return { "background-color": a0 }; };
function MarcadoresComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const marcador_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.irMarcador(marcador_r2.marker); })("dblclick", function MarcadoresComponent_li_3_Template_li_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.borrarMarcador(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marcador_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, marcador_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" marker ", i_r3 + 1, " ");
} }
class MarcadoresComponent {
    constructor() {
        this.zoomLevel = 15;
        this.center = [-75.921029433568, 45.28719674822362];
        // Arreglo de marcadores
        this.marcadores = [];
    }
    ngAfterViewInit() {
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.center,
            zoom: this.zoomLevel
        });
        this.leerLocalStorage();
        // const markerHtml: HTMLElement = document.createElement('div');
        // markerHtml.innerHTML = 'Hola Mundo';
        // new mapboxgl.Marker()
        //   .setLngLat( this.center )
        //   .addTo( this.mapa );
    }
    agregarMarcador() {
        const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
        const nuevoMarcador = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"]({
            draggable: true,
            color
        })
            .setLngLat(this.center)
            .addTo(this.mapa);
        this.marcadores.push({
            color,
            marker: nuevoMarcador
        });
        this.guardarMarcadoresLocalStorage();
        nuevoMarcador.on('dragend', () => {
            this.guardarMarcadoresLocalStorage();
        });
    }
    irMarcador(marker) {
        this.mapa.flyTo({
            center: marker.getLngLat()
        });
    }
    guardarMarcadoresLocalStorage() {
        const lngLatArr = [];
        this.marcadores.forEach(m => {
            const color = m.color;
            const { lng, lat } = m.marker.getLngLat();
            lngLatArr.push({
                color: color,
                centro: [lng, lat]
            });
        });
        localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
    }
    leerLocalStorage() {
        if (!localStorage.getItem('marcadores')) {
            return;
        }
        const lngLatArr = JSON.parse(localStorage.getItem('marcadores'));
        lngLatArr.forEach(m => {
            const newMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"]({
                color: m.color,
                draggable: true
            })
                .setLngLat(m.centro)
                .addTo(this.mapa);
            this.marcadores.push({
                marker: newMarker,
                color: m.color
            });
            newMarker.on('dragend', () => {
                this.guardarMarcadoresLocalStorage();
            });
        });
    }
    borrarMarcador(i) {
        var _a;
        (_a = this.marcadores[i].marker) === null || _a === void 0 ? void 0 : _a.remove();
        this.marcadores.splice(i, 1);
        this.guardarMarcadoresLocalStorage();
    }
}
MarcadoresComponent.ɵfac = function MarcadoresComponent_Factory(t) { return new (t || MarcadoresComponent)(); };
MarcadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarcadoresComponent, selectors: [["app-marcadores"]], viewQuery: function MarcadoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMapa = _t.first);
    } }, decls: 6, vars: 1, consts: [[1, "list-group"], [1, "list-group-item", "list-group-item-info", 3, "click"], ["class", "list-group-item", 3, "ngStyle", "click", "dblclick", 4, "ngFor", "ngForOf"], [1, "mapa-container"], ["mapa", ""], [1, "list-group-item", 3, "ngStyle", "click", "dblclick"]], template: function MarcadoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarcadoresComponent_Template_li_click_1_listener() { return ctx.agregarMarcador(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " + Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MarcadoresComponent_li_3_Template, 2, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.marcadores);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".mapa-container[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%; \n    }\n\n    .list-group[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      z-index: 99;\n    }\n    li[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarcadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-marcadores',
                templateUrl: './marcadores.component.html',
                styles: [
                    `
    .mapa-container {
      height: 100%;
      width: 100%; 
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    li {
      cursor: pointer;
    }
    `
                ]
            }]
    }], function () { return []; }, { divMapa: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapa']
        }] }); })();


/***/ }),

/***/ "vVBX":
/*!******************************************************************!*\
  !*** ./src/app/mapas/pages/propiedades/propiedades.component.ts ***!
  \******************************************************************/
/*! exports provided: PropiedadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropiedadesComponent", function() { return PropiedadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_mini_mapa_mini_mapa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/mini-mapa/mini-mapa.component */ "1j4D");




function PropiedadesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mini-mapa", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const propiedad_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lngLat", propiedad_r1.lngLat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", propiedad_r1.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", propiedad_r1.descripcion, " ");
} }
class PropiedadesComponent {
    constructor() {
        this.propiedades = [
            {
                titulo: 'Casa residencial, Canadá',
                descripcion: 'Bella propiedad en Katana, Canadá',
                lngLat: [-75.92722289474008, 45.280015511264466]
            },
            {
                titulo: 'Casa de playa, México',
                descripcion: 'Hermosa casa de playa en Acapulco, México',
                lngLat: [-99.91287720907991, 16.828940930185748]
            },
            {
                titulo: 'Apartamento, Argentina',
                descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
                lngLat: [-58.430166677283445, -34.57150108832866]
            },
            {
                titulo: 'Local comercial, España',
                descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
                lngLat: [-3.7112735618380177, 40.42567285425766]
            },
        ];
    }
}
PropiedadesComponent.ɵfac = function PropiedadesComponent_Factory(t) { return new (t || PropiedadesComponent)(); };
PropiedadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropiedadesComponent, selectors: [["app-propiedades"]], decls: 11, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-2"], [1, "col"], [1, "row", "container"], [1, "row"], ["class", "col-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-4", "mb-2"], [1, "card"], [1, "card-img-top", 3, "lngLat"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function PropiedadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lista de propiedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PropiedadesComponent_div_10_Template, 8, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propiedades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_mini_mapa_mini_mapa_component__WEBPACK_IMPORTED_MODULE_2__["MiniMapaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropiedadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propiedades',
                templateUrl: './propiedades.component.html',
                styles: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=mapas-mapas-module.js.map