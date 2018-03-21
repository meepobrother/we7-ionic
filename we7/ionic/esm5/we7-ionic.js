import { __extends, __spread, __values } from 'tslib';
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, Directive, TemplateRef, ViewContainerRef, ChangeDetectorRef, ContentChild, ElementRef, HostListener, Renderer2, Input, Component, ViewEncapsulation, Attribute, EventEmitter, Output, NgModule, APP_INITIALIZER } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { CommonModule } from '@angular/common';

function proxyMethod(ctrlName, methodName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var controller = ensureElementInBody(ctrlName);
    return controller.componentOnReady()
        .then(function () { return ((controller))[methodName].apply(controller, args); });
}
function ensureElementInBody(elementName) {
    var element = document.querySelector(elementName);
    if (!element) {
        element = document.createElement(elementName);
        document.body.appendChild(element);
    }
    var ele = (element);
    return ele;
}
var OverlayBaseController = /** @class */ (function () {
    function OverlayBaseController(ctrl) {
        this.ctrl = ctrl;
    }
    OverlayBaseController.prototype.create = function (opts) {
        return proxyMethod(this.ctrl, 'create', opts);
    };
    OverlayBaseController.prototype.dismiss = function (data, role, id) {
        if (id === void 0) { id = -1; }
        return proxyMethod(this.ctrl, 'dismiss', data, role, id);
    };
    OverlayBaseController.prototype.getTop = function () {
        return proxyMethod(this.ctrl, 'getTop');
    };
    return OverlayBaseController;
}());
var AlertController = /** @class */ (function (_super) {
    __extends(AlertController, _super);
    function AlertController() {
        return _super.call(this, 'ion-alert-controller') || this;
    }
    return AlertController;
}(OverlayBaseController));
AlertController.decorators = [
    { type: Injectable },
];
AlertController.ctorParameters = function () { return []; };
var ActionSheetController = /** @class */ (function (_super) {
    __extends(ActionSheetController, _super);
    function ActionSheetController() {
        return _super.call(this, 'ion-action-sheet-controller') || this;
    }
    return ActionSheetController;
}(OverlayBaseController));
ActionSheetController.decorators = [
    { type: Injectable },
];
ActionSheetController.ctorParameters = function () { return []; };
var Events = /** @class */ (function () {
    function Events() {
        this.c = ([]);
    }
    Events.prototype.subscribe = function (topic) {
        var _this = this;
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        if (!this.c[topic]) {
            this.c[topic] = [];
        }
        handlers.forEach(function (handler) {
            _this.c[topic].push(handler);
        });
    };
    Events.prototype.unsubscribe = function (topic, handler) {
        if (handler === void 0) { handler = null; }
        var t = this.c[topic];
        if (!t) {
            return false;
        }
        if (!handler) {
            delete this.c[topic];
            return true;
        }
        var i = t.indexOf(handler);
        if (i < 0) {
            return false;
        }
        t.splice(i, 1);
        if (!t.length) {
            delete this.c[topic];
        }
        return true;
    };
    Events.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var t = this.c[topic];
        if (!t) {
            return null;
        }
        var responses = [];
        t.forEach(function (handler) {
            responses.push(handler.apply(void 0, __spread(args)));
        });
        return responses;
    };
    return Events;
}());
Events.decorators = [
    { type: Injectable },
];
Events.ctorParameters = function () { return []; };
function setupEvents() {
    var events = new Events();
    window.addEventListener('online', function (ev) { return events.publish('app:online', ev); });
    window.addEventListener('offline', function (ev) { return events.publish('app:offline', ev); });
    window.addEventListener('orientationchange', function (ev) { return events.publish('app:rotated', ev); });
    return events;
}
function setupProvideEvents() {
    return function () {
        return setupEvents();
    };
}
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        return _super.call(this, 'ion-loading-controller') || this;
    }
    return LoadingController;
}(OverlayBaseController));
LoadingController.decorators = [
    { type: Injectable },
];
LoadingController.ctorParameters = function () { return []; };
var PickerController = /** @class */ (function (_super) {
    __extends(PickerController, _super);
    function PickerController() {
        return _super.call(this, 'ion-picker-controller') || this;
    }
    return PickerController;
}(OverlayBaseController));
PickerController.decorators = [
    { type: Injectable },
];
PickerController.ctorParameters = function () { return []; };
var CTRL = 'ion-menu-controller';
var MenuController = /** @class */ (function () {
    function MenuController() {
    }
    MenuController.prototype.open = function (menuId) {
        return proxyMethod(CTRL, 'open', menuId);
    };
    MenuController.prototype.close = function (menuId) {
        return proxyMethod(CTRL, 'close', menuId);
    };
    MenuController.prototype.toggle = function (menuId) {
        return proxyMethod(CTRL, 'toggle', menuId);
    };
    MenuController.prototype.enable = function (shouldEnable, menuId) {
        return proxyMethod(CTRL, 'enable', shouldEnable, menuId);
    };
    MenuController.prototype.swipeEnable = function (shouldEnable, menuId) {
        return proxyMethod(CTRL, 'swipeEnable', shouldEnable, menuId);
    };
    MenuController.prototype.isOpen = function (menuId) {
        return proxyMethod(CTRL, 'isOpen', menuId);
    };
    MenuController.prototype.isEnabled = function (menuId) {
        return proxyMethod(CTRL, 'isEnabled', menuId);
    };
    MenuController.prototype.get = function (menuId) {
        return proxyMethod(CTRL, 'get', menuId);
    };
    MenuController.prototype.getOpen = function () {
        return proxyMethod(CTRL, 'getOpen');
    };
    MenuController.prototype.getMenus = function () {
        return proxyMethod(CTRL, 'getMenus');
    };
    return MenuController;
}());
MenuController.decorators = [
    { type: Injectable },
];
MenuController.ctorParameters = function () { return []; };
var dir = 'ltr';
var isRtl = false;
var lang = '';
var Platform = /** @class */ (function () {
    function Platform() {
        initialize(this);
    }
    Platform.prototype.is = function (platformName) {
        return isImpl(this, platformName);
    };
    Platform.prototype.isAsync = function (platformName) {
        return isAsyncImpl(this, platformName);
    };
    Platform.prototype.platforms = function () {
        return platformsImpl(this);
    };
    Platform.prototype.platformsAsync = function () {
        return platformsAsyncImpl(this);
    };
    Platform.prototype.versions = function () {
        return versionsImpl(this);
    };
    Platform.prototype.versionsAsync = function () {
        return versionsAsyncImpl(this);
    };
    Platform.prototype.ready = function () {
        return readyImpl(this);
    };
    Object.defineProperty(Platform.prototype, "isRTL", {
        get: function () {
            return isRtl;
        },
        enumerable: true,
        configurable: true
    });
    Platform.prototype.setDir = function (_dir, updateDocument) {
        dir = _dir;
        isRtl = dir === 'rtl';
        if (updateDocument !== false) {
            document.documentElement.setAttribute('dir', dir);
        }
    };
    Platform.prototype.dir = function () {
        return dir;
    };
    Platform.prototype.setLang = function (language, updateDocument) {
        lang = language;
        if (updateDocument !== false) {
            document.documentElement.setAttribute('lang', language);
        }
    };
    Platform.prototype.lang = function () {
        return lang;
    };
    Platform.prototype.getQueryParam = function (key) {
        return getQueryParamImpl(this, key);
    };
    Platform.prototype.getQueryParamAsync = function (key) {
        return getQueryParamAsyncImpl(this, key);
    };
    Platform.prototype.height = function () {
        return window.innerHeight;
    };
    Platform.prototype.isLandscape = function () {
        return !this.isPortrait();
    };
    Platform.prototype.isPortrait = function () {
        return window.matchMedia('(orientation: portrait)').matches;
    };
    Platform.prototype.testUserAgent = function (expression) {
        return navigator.userAgent.indexOf(expression) >= 0;
    };
    Platform.prototype.url = function () {
        return window.location.href;
    };
    Platform.prototype.width = function () {
        return window.innerWidth;
    };
    return Platform;
}());
function isImpl(platform, platformName) {
    if (platform._element && platform._element.is) {
        return platform._element.is(platformName);
    }
    return false;
}
function isAsyncImpl(platform, platformName) {
    return getHydratedPlatform(platform).then(function () {
        return platform._element.is(platformName);
    });
}
function platformsImpl(platform) {
    if (platform._element && platform._element.platforms) {
        return platform._element.platforms();
    }
    return [];
}
function platformsAsyncImpl(platform) {
    return getHydratedPlatform(platform).then(function () {
        return platform._element.platforms();
    });
}
function versionsImpl(platform) {
    if (platform._element && platform._element.versions) {
        return platform._element.versions();
    }
    return [];
}
function versionsAsyncImpl(platform) {
    return getHydratedPlatform(platform).then(function () {
        return platform._element.versions();
    });
}
function readyImpl(platform) {
    return getHydratedPlatform(platform).then(function () {
        return platform._element.ready();
    });
}
function getQueryParamImpl(platform, key) {
    if (platform._element && platform._element.getQueryParam) {
        return platform._element.getQueryParam(key);
    }
    return null;
}
function getQueryParamAsyncImpl(platform, key) {
    return getHydratedPlatform(platform).then(function () {
        return platform._element.getQueryParam(key);
    });
}
function initialize(platform) {
    var ionApp = document.querySelector('ion-app');
    if (ionApp) {
        return ionApp.componentOnReady(function () {
            platform._element = ionApp.querySelector('ion-platform');
        });
    }
    var platformElement = document.querySelector('ion-platform');
    if (!platformElement) {
        platformElement = document.createElement('ion-platform');
        document.body.appendChild(platformElement);
    }
    platform._element = platformElement;
}
function getHydratedPlatform(platform) {
    if (!platform._element) {
        var ionApp_1 = document.querySelector('ion-app');
        return ((ionApp_1)).componentOnReady(function () {
            var platformEl = ionApp_1.querySelector('ion-platform');
            return platformEl.componentOnReady().then(function () {
                platform._element = platformEl;
                return platformEl;
            });
        });
    }
    return platform._element.componentOnReady();
}
var ToastController = /** @class */ (function (_super) {
    __extends(ToastController, _super);
    function ToastController() {
        return _super.call(this, 'ion-toast-controller') || this;
    }
    return ToastController;
}(OverlayBaseController));
ToastController.decorators = [
    { type: Injectable },
];
ToastController.ctorParameters = function () { return []; };
var AngularDelegate = /** @class */ (function () {
    function AngularDelegate(appRef) {
        this.appRef = appRef;
    }
    AngularDelegate.prototype.create = function (cfr, injector) {
        return new AngularFrameworkDelegate(cfr, injector, this.appRef);
    };
    return AngularDelegate;
}());
AngularDelegate.decorators = [
    { type: Injectable },
];
AngularDelegate.ctorParameters = function () { return [
    { type: ApplicationRef, },
]; };
var AngularFrameworkDelegate = /** @class */ (function () {
    function AngularFrameworkDelegate(cfr, injector, appRef) {
        this.cfr = cfr;
        this.injector = injector;
        this.appRef = appRef;
        this.elRefMap = new WeakMap();
    }
    AngularFrameworkDelegate.prototype.attachViewToDom = function (container, component, data, cssClasses) {
        var componentFactory = this.cfr.resolveComponentFactory(component);
        var hostElement = document.createElement(componentFactory.selector);
        if (data) {
            Object.assign(hostElement, data);
        }
        var childInjector = Injector.create([], this.injector);
        var componentRef = componentFactory.create(childInjector, [], hostElement);
        try {
            for (var cssClasses_1 = __values(cssClasses), cssClasses_1_1 = cssClasses_1.next(); !cssClasses_1_1.done; cssClasses_1_1 = cssClasses_1.next()) {
                var clazz = cssClasses_1_1.value;
                hostElement.classList.add(clazz);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cssClasses_1_1 && !cssClasses_1_1.done && (_a = cssClasses_1.return)) _a.call(cssClasses_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        container.appendChild(hostElement);
        this.appRef.attachView(componentRef.hostView);
        this.elRefMap.set(hostElement, componentRef);
        return Promise.resolve(hostElement);
        var e_1, _a;
    };
    AngularFrameworkDelegate.prototype.removeViewFromDom = function (_container, component) {
        var mountingData = this.elRefMap.get(component);
        if (mountingData) {
            mountingData.componentRef.destroy();
            this.elRefMap.delete(component);
        }
        return Promise.resolve();
    };
    return AngularFrameworkDelegate;
}());
var ModalController = /** @class */ (function (_super) {
    __extends(ModalController, _super);
    function ModalController(cfr, injector, angularDelegate) {
        var _this = _super.call(this, 'ion-modal-controller') || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.angularDelegate = angularDelegate;
        return _this;
    }
    ModalController.prototype.create = function (opts) {
        return _super.prototype.create.call(this, Object.assign({}, opts, { delegate: this.angularDelegate.create(this.cfr, this.injector) }));
    };
    return ModalController;
}(OverlayBaseController));
ModalController.decorators = [
    { type: Injectable },
];
ModalController.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: AngularDelegate, },
]; };
var VirtualFooter = /** @class */ (function () {
    function VirtualFooter(templateRef) {
        this.templateRef = templateRef;
    }
    return VirtualFooter;
}());
VirtualFooter.decorators = [
    { type: Directive, args: [{ selector: '[virtualFooter]' },] },
];
VirtualFooter.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
var VirtualItem = /** @class */ (function () {
    function VirtualItem(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    return VirtualItem;
}());
VirtualItem.decorators = [
    { type: Directive, args: [{ selector: '[virtualItem]' },] },
];
VirtualItem.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
var VirtualHeader = /** @class */ (function () {
    function VirtualHeader(templateRef) {
        this.templateRef = templateRef;
    }
    return VirtualHeader;
}());
VirtualHeader.decorators = [
    { type: Directive, args: [{ selector: '[virtualHeader]' },] },
];
VirtualHeader.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
var VirtualContext = /** @class */ (function () {
    function VirtualContext($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    Object.defineProperty(VirtualContext.prototype, "first", {
        get: function () { return this.index === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualContext.prototype, "last", {
        get: function () { return this.index === this.count - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualContext.prototype, "even", {
        get: function () { return this.index % 2 === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualContext.prototype, "odd", {
        get: function () { return !this.even; },
        enumerable: true,
        configurable: true
    });
    return VirtualContext;
}());
var VirtualScroll = /** @class */ (function () {
    function VirtualScroll(el, cd) {
        this.el = el;
        this.cd = cd;
        this.el.nativeElement.itemRender = this.itemRender.bind(this);
    }
    VirtualScroll.prototype.itemRender = function (el, cell, index) {
        if (!el) {
            var node_1 = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), new VirtualContext(null, null, null), index);
            el = getElement(node_1);
            ((el))['$ionView'] = node_1;
        }
        var node = ((el))['$ionView'];
        var ctx = node.context;
        ctx.$implicit = cell.value;
        ctx.index = cell.index;
        node.detectChanges();
        return el;
    };
    VirtualScroll.prototype.getComponent = function (type) {
        switch (type) {
            case 0: return this.itmTmp.templateRef;
            case 1: return this.hdrTmp.templateRef;
            case 2: return this.ftrTmp.templateRef;
        }
        return null;
    };
    return VirtualScroll;
}());
VirtualScroll.decorators = [
    { type: Directive, args: [{
                selector: 'ion-virtual-scroll'
            },] },
];
VirtualScroll.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
VirtualScroll.propDecorators = {
    "itmTmp": [{ type: ContentChild, args: [VirtualItem,] },],
    "hdrTmp": [{ type: ContentChild, args: [VirtualHeader,] },],
    "ftrTmp": [{ type: ContentChild, args: [VirtualFooter,] },],
};
function getElement(view) {
    var rootNodes = view.rootNodes;
    for (var i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    return null;
}
function setIonicClasses(element) {
    var classList = element.nativeElement.classList;
    classList.remove('ion-invalid');
    classList.remove('ion-valid');
    classList.remove('ion-touched');
    classList.remove('ion-untouched');
    classList.remove('ion-dirty');
    classList.remove('ion-pristine');
    classList.forEach(function (cls) {
        if (cls === 'ng-invalid') {
            classList.add('ion-invalid');
        }
        if (cls === 'ng-valid') {
            classList.add('ion-valid');
        }
        if (cls === 'ng-touched') {
            classList.add('ion-touched');
        }
        if (cls === 'ng-untouched') {
            classList.add('ion-untouched');
        }
        if (cls === 'ng-dirty') {
            classList.add('ion-dirty');
        }
        if (cls === 'ng-pristine') {
            classList.add('ion-pristine');
        }
    });
}
var BooleanValueAccessor = /** @class */ (function () {
    function BooleanValueAccessor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    BooleanValueAccessor.prototype.writeValue = function (value) {
        this.renderer.setProperty(this.element.nativeElement, 'checked', value);
        setIonicClasses(this.element);
    };
    BooleanValueAccessor.prototype._handleIonChange = function (value) {
        var _this = this;
        this.onChange(value);
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    BooleanValueAccessor.prototype._handleBlurEvent = function () {
        var _this = this;
        this.onTouched();
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    BooleanValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BooleanValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BooleanValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return BooleanValueAccessor;
}());
BooleanValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'ion-checkbox,ion-toggle',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
BooleanValueAccessor.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
BooleanValueAccessor.propDecorators = {
    "_handleIonChange": [{ type: HostListener, args: ['ionChange', ['$event.target.checked'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};
var NumericValueAccessor = /** @class */ (function () {
    function NumericValueAccessor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    NumericValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
        setIonicClasses(this.element);
    };
    NumericValueAccessor.prototype._handleInputEvent = function (value) {
        var _this = this;
        this.onChange(value);
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    NumericValueAccessor.prototype._handleBlurEvent = function () {
        var _this = this;
        this.onTouched();
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    NumericValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) {
            fn(value === '' ? null : parseFloat(value));
        };
    };
    NumericValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NumericValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return NumericValueAccessor;
}());
NumericValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'ion-input[type=number]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
NumericValueAccessor.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
NumericValueAccessor.propDecorators = {
    "_handleInputEvent": [{ type: HostListener, args: ['input', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};
var RadioValueAccessor = /** @class */ (function () {
    function RadioValueAccessor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    RadioValueAccessor.prototype.writeValue = function (value) {
        this.renderer.setProperty(this.element.nativeElement, 'checked', value === this.value);
        setIonicClasses(this.element);
    };
    RadioValueAccessor.prototype._handleIonSelect = function (value) {
        var _this = this;
        this.onChange(value);
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    RadioValueAccessor.prototype._handleBlurEvent = function () {
        var _this = this;
        this.onTouched();
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    RadioValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function () {
            fn(_this.value);
        };
    };
    RadioValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return RadioValueAccessor;
}());
RadioValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'ion-radio',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
RadioValueAccessor.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
RadioValueAccessor.propDecorators = {
    "value": [{ type: Input },],
    "_handleIonSelect": [{ type: HostListener, args: ['ionSelect', ['$event.target.checked'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};
var SelectValueAccessor = /** @class */ (function () {
    function SelectValueAccessor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    SelectValueAccessor.prototype.writeValue = function (value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
        setIonicClasses(this.element);
    };
    SelectValueAccessor.prototype._handleChangeEvent = function (value) {
        var _this = this;
        this.onChange(value);
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    SelectValueAccessor.prototype._handleBlurEvent = function () {
        var _this = this;
        this.onTouched();
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    SelectValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return SelectValueAccessor;
}());
SelectValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
SelectValueAccessor.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
SelectValueAccessor.propDecorators = {
    "_handleChangeEvent": [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};
var TextValueAccessor = /** @class */ (function () {
    function TextValueAccessor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    TextValueAccessor.prototype.writeValue = function (value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
        setIonicClasses(this.element);
    };
    TextValueAccessor.prototype._handleInputEvent = function (value) {
        var _this = this;
        this.onChange(value);
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    TextValueAccessor.prototype._handleBlurEvent = function () {
        var _this = this;
        this.onTouched();
        setTimeout(function () {
            setIonicClasses(_this.element);
        });
    };
    TextValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TextValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TextValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    return TextValueAccessor;
}());
TextValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'ion-input:not([type=number]),ion-textarea,ion-searchbar',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
TextValueAccessor.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
TextValueAccessor.propDecorators = {
    "_handleInputEvent": [{ type: HostListener, args: ['input', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};
var IonNav = /** @class */ (function () {
    function IonNav(router) {
        console.log('ion-nav');
        router.events.subscribe(function (ev) {
            if (ev instanceof NavigationStart) {
                console.log('NavigationStart', ev.url);
            }
            else if (ev instanceof NavigationEnd) {
                console.log('NavigationEnd', ev.url);
            }
        });
    }
    return IonNav;
}());
IonNav.decorators = [
    { type: Component, args: [{
                selector: 'ion-nav',
                template: '<ng-content></ng-content>',
                styles: ["\n    ion-nav > :not(.show-page) { display: none; }\n  "],
                encapsulation: ViewEncapsulation.None
            },] },
];
IonNav.ctorParameters = function () { return [
    { type: Router, },
]; };
function attachView(views, location, ref, activatedRoute) {
    initRouteViewElm(views, ref, activatedRoute);
    location.insert(ref.hostView);
}
function initRouteViewElm(views, ref, activatedRoute) {
    views.push({
        ref: ref,
        urlKey: getUrlKey(activatedRoute),
        deactivatedId: -1
    });
    ((ref.location.nativeElement)).classList.add('ion-page');
}
function getExistingView(views, activatedRoute) {
    return views.find(function (vw) {
        return isMatchingActivatedRoute(vw.urlKey, activatedRoute);
    });
}
function isMatchingActivatedRoute(existingUrlKey, activatedRoute) {
    var activatedUrlKey = getUrlKey(activatedRoute);
    return activatedUrlKey === existingUrlKey;
}
function getLastDeactivatedRef(views) {
    if (views.length < 2) {
        return null;
    }
    return views.sort(function (a, b) {
        if (a.deactivatedId > b.deactivatedId)
            return -1;
        if (a.deactivatedId < b.deactivatedId)
            return 1;
        return 0;
    })[0].ref;
}
function getUrlKey(activatedRoute) {
    var url = ((activatedRoute.url)).value;
    return url.map(function (u) {
        return u.path + '$$' + JSON.stringify(u.parameters);
    }).join('/');
}
function deactivateView(views, ref) {
    var view = views.find(function (vw) { return vw.ref === ref; });
    if (view) {
        view.deactivatedId = deactivatedIds++;
    }
}
function destoryViews(views) {
    views.forEach(function (vw) {
        vw.ref.destroy();
    });
    views.length = 0;
}
var deactivatedIds = 0;
function runTransition(enteringRef, leavingRef) {
    var enteringElm = (enteringRef && enteringRef.location && enteringRef.location.nativeElement);
    var leavingElm = (leavingRef && leavingRef.location && leavingRef.location.nativeElement);
    if (!enteringElm && !leavingElm) {
        return Promise.resolve();
    }
    return transition(enteringElm, leavingElm);
}
function transition(enteringElm, leavingElm) {
    console.log('transition start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (enteringElm) {
                enteringElm.classList.add('show-page');
            }
            if (leavingElm) {
                leavingElm.classList.remove('show-page');
            }
            resolve();
        }, 750);
    });
}
var IonRouterOutlet = /** @class */ (function () {
    function IonRouterOutlet(parentContexts, location, resolver, name, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.activated = null;
        this._activatedRoute = null;
        this.views = [];
        this.activateEvents = new EventEmitter();
        this.deactivateEvents = new EventEmitter();
        this.name = name || 'primary';
        parentContexts.onChildOutletCreated(this.name, (this));
    }
    IonRouterOutlet.prototype.ngOnDestroy = function () {
        destoryViews(this.views);
        this.parentContexts.onChildOutletDestroyed(this.name);
    };
    IonRouterOutlet.prototype.ngOnInit = function () {
        if (!this.activated) {
            var context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    this.attach(context.attachRef, context.route);
                }
                else {
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    };
    Object.defineProperty(IonRouterOutlet.prototype, "isActivated", {
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "component", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "activatedRoute", {
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return (this._activatedRoute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonRouterOutlet.prototype, "activatedRouteData", {
        get: function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    IonRouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    };
    IonRouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        attachView(this.views, this.location, ref, activatedRoute);
    };
    IonRouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var c = this.component;
            deactivateView(this.views, this.activated);
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    IonRouterOutlet.prototype.activateWith = function (activatedRoute, resolver) {
        var _this = this;
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        var existingView = getExistingView(this.views, activatedRoute);
        if (existingView) {
            this.activated = existingView.ref;
        }
        else {
            var snapshot = ((activatedRoute))._futureSnapshot;
            var component = (((snapshot.routeConfig)).component);
            resolver = resolver || this.resolver;
            var factory = resolver.resolveComponentFactory(component);
            var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            var injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
            this.activated = this.location.createComponent(factory, this.location.length, injector);
            initRouteViewElm(this.views, this.activated, activatedRoute);
        }
        this.changeDetector.markForCheck();
        var lastDeactivatedRef = getLastDeactivatedRef(this.views);
        runTransition(this.activated, lastDeactivatedRef).then(function () {
            console.log('transition end');
            _this.activateEvents.emit(_this.activated.instance);
        });
    };
    return IonRouterOutlet;
}());
IonRouterOutlet.decorators = [
    { type: Directive, args: [{ selector: 'ion-router-outlet', exportAs: 'ionOutlet' },] },
];
IonRouterOutlet.ctorParameters = function () { return [
    { type: ChildrenOutletContexts, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: undefined, decorators: [{ type: Attribute, args: ['name',] },] },
    { type: ChangeDetectorRef, },
]; };
IonRouterOutlet.propDecorators = {
    "activateEvents": [{ type: Output, args: ['activate',] },],
    "deactivateEvents": [{ type: Output, args: ['deactivate',] },],
};
var OutletInjector = /** @class */ (function () {
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    OutletInjector.prototype.get = function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());
var IonTab = /** @class */ (function () {
    function IonTab(elementRef) {
        this.elementRef = elementRef;
    }
    IonTab.prototype.ngOnInit = function () {
        console.log('routerLink', this.tabLink, this.elementRef.nativeElement);
    };
    return IonTab;
}());
IonTab.decorators = [
    { type: Directive, args: [{
                selector: 'ion-tab'
            },] },
];
IonTab.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
IonTab.propDecorators = {
    "tabLink": [{ type: Input },],
};
var IonTabs = /** @class */ (function () {
    function IonTabs(router) {
        this.router = router;
    }
    IonTabs.prototype.ionTabbarClick = function (ev) {
        console.log('ionTabbarClick', ev);
        var tabElm = (ev.detail);
        if (tabElm && tabElm.href) {
            console.log('tabElm', tabElm.href);
            this.router.navigateByUrl(tabElm.href);
        }
    };
    return IonTabs;
}());
IonTabs.decorators = [
    { type: Directive, args: [{
                selector: 'ion-tabs'
            },] },
];
IonTabs.ctorParameters = function () { return [
    { type: Router, },
]; };
IonTabs.propDecorators = {
    "ionTabbarClick": [{ type: HostListener, args: ['ionTabbarClick', ['$event'],] },],
};
var declarations = [
    VirtualFooter, VirtualScroll, VirtualHeader, VirtualItem,
    BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor,
    SelectValueAccessor, TextValueAccessor,
    IonNav, IonRouterOutlet, IonTab, IonTabs
];
var We7IonicModule = /** @class */ (function () {
    function We7IonicModule() {
    }
    We7IonicModule.forRoot = function () {
        return {
            ngModule: We7IonicModule,
            providers: [
                AlertController,
                ActionSheetController,
                Events,
                LoadingController,
                PickerController,
                MenuController,
                Platform,
                ToastController,
                ModalController,
                AngularDelegate,
                { provide: APP_INITIALIZER, useFactory: setupProvideEvents, multi: true },
            ]
        };
    };
    return We7IonicModule;
}());
We7IonicModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: __spread(declarations),
                exports: __spread(declarations)
            },] },
];
We7IonicModule.ctorParameters = function () { return []; };
var PopoverController = /** @class */ (function (_super) {
    __extends(PopoverController, _super);
    function PopoverController(cfr, injector, angularDelegate) {
        var _this = _super.call(this, 'ion-popover-controller') || this;
        _this.cfr = cfr;
        _this.injector = injector;
        _this.angularDelegate = angularDelegate;
        return _this;
    }
    PopoverController.prototype.create = function (opts) {
        return _super.prototype.create.call(this, Object.assign({}, opts, { delegate: this.angularDelegate.create(this.cfr, this.injector) }));
    };
    return PopoverController;
}(OverlayBaseController));
PopoverController.decorators = [
    { type: Injectable },
];
PopoverController.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: AngularDelegate, },
]; };
var win = ((window));
var Ionic = win.Ionic;
if (Ionic) {
    Ionic.ael = function ngAddEventListener(elm, eventName, cb, opts) {
        if (elm.__zone_symbol__addEventListener) {
            elm.__zone_symbol__addEventListener(eventName, cb, opts);
        }
        else {
            elm.addEventListener(eventName, cb, opts);
        }
    };
    Ionic.rel = function ngRemoveEventListener(elm, eventName, cb, opts) {
        if (elm.__zone_symbol__removeEventListener) {
            elm.__zone_symbol__removeEventListener(eventName, cb, opts);
        }
        else {
            elm.removeEventListener(eventName, cb, opts);
        }
    };
    Ionic.raf = function ngRequestAnimationFrame(cb) {
        if (win.__zone_symbol__requestAnimationFrame) {
            win.__zone_symbol__requestAnimationFrame(cb);
        }
        else {
            win.requestAnimationFrame(cb);
        }
    };
}

export { We7IonicModule, IonNav, IonRouterOutlet, IonTab, IonTabs, VirtualScroll, VirtualItem, VirtualHeader, VirtualFooter, AngularDelegate, ActionSheetController, AlertController, Events, LoadingController, MenuController, PickerController, ModalController, Platform, PopoverController, ToastController, BooleanValueAccessor as ɵd, NumericValueAccessor as ɵe, RadioValueAccessor as ɵf, SelectValueAccessor as ɵg, TextValueAccessor as ɵh, VirtualContext as ɵc, setupProvideEvents as ɵb, OverlayBaseController as ɵi, declarations as ɵa };
//# sourceMappingURL=we7-ionic.js.map
