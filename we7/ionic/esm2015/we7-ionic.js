import { Injectable, Directive, TemplateRef, ViewContainerRef, ChangeDetectorRef, ContentChild, ElementRef, HostListener, Renderer2, Input, Component, ViewEncapsulation, Attribute, ComponentFactoryResolver, EventEmitter, Output, NgModule, APP_INITIALIZER, ApplicationRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} ctrlName
 * @param {?} methodName
 * @param {...?} args
 * @return {?}
 */
function proxyMethod(ctrlName, methodName, ...args) {
    const /** @type {?} */ controller = ensureElementInBody(ctrlName);
    return controller.componentOnReady()
        .then(() => (/** @type {?} */ (controller))[methodName].apply(controller, args));
}
/**
 * @param {?} elementName
 * @return {?}
 */
function ensureElementInBody(elementName) {
    let /** @type {?} */ element = document.querySelector(elementName);
    if (!element) {
        element = document.createElement(elementName);
        document.body.appendChild(element);
    }
    let /** @type {?} */ ele = /** @type {?} */ (element);
    return ele;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template Opts, Overlay
 */
class OverlayBaseController {
    /**
     * @param {?} ctrl
     */
    constructor(ctrl) {
        this.ctrl = ctrl;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    create(opts) {
        return proxyMethod(this.ctrl, 'create', opts);
    }
    /**
     * @param {?=} data
     * @param {?=} role
     * @param {?=} id
     * @return {?}
     */
    dismiss(data, role, id = -1) {
        return proxyMethod(this.ctrl, 'dismiss', data, role, id);
    }
    /**
     * @return {?}
     */
    getTop() {
        return proxyMethod(this.ctrl, 'getTop');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AlertController extends OverlayBaseController {
    constructor() {
        super('ion-alert-controller');
    }
}
AlertController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AlertController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ActionSheetController extends OverlayBaseController {
    constructor() {
        super('ion-action-sheet-controller');
    }
}
ActionSheetController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ActionSheetController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Events {
    constructor() {
        this.c = /** @type {?} */ ([]);
    }
    /**
     * @param {?} topic
     * @param {...?} handlers
     * @return {?}
     */
    subscribe(topic, ...handlers) {
        if (!this.c[topic]) {
            this.c[topic] = [];
        }
        handlers.forEach((handler) => {
            this.c[topic].push(handler);
        });
    }
    /**
     * @param {?} topic
     * @param {?=} handler
     * @return {?}
     */
    unsubscribe(topic, handler = null) {
        const /** @type {?} */ t = this.c[topic];
        if (!t) {
            return false;
        }
        if (!handler) {
            delete this.c[topic];
            return true;
        }
        const /** @type {?} */ i = t.indexOf(handler);
        if (i < 0) {
            return false;
        }
        t.splice(i, 1);
        if (!t.length) {
            delete this.c[topic];
        }
        return true;
    }
    /**
     * @param {?} topic
     * @param {...?} args
     * @return {?}
     */
    publish(topic, ...args) {
        const /** @type {?} */ t = this.c[topic];
        if (!t) {
            return null;
        }
        const /** @type {?} */ responses = [];
        t.forEach((handler) => {
            responses.push(handler(...args));
        });
        return responses;
    }
}
Events.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Events.ctorParameters = () => [];
/**
 * @return {?}
 */
function setupEvents() {
    const /** @type {?} */ events = new Events();
    window.addEventListener('online', ev => events.publish('app:online', ev));
    window.addEventListener('offline', ev => events.publish('app:offline', ev));
    window.addEventListener('orientationchange', ev => events.publish('app:rotated', ev));
    return events;
}
/**
 * @return {?}
 */
function setupProvideEvents() {
    return function () {
        return setupEvents();
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoadingController extends OverlayBaseController {
    constructor() {
        super('ion-loading-controller');
    }
}
LoadingController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoadingController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PickerController extends OverlayBaseController {
    constructor() {
        super('ion-picker-controller');
    }
}
PickerController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PickerController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const CTRL = 'ion-menu-controller';
class MenuController {
    /**
     * @param {?=} menuId
     * @return {?}
     */
    open(menuId) {
        return proxyMethod(CTRL, 'open', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?}
     */
    close(menuId) {
        return proxyMethod(CTRL, 'close', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?}
     */
    toggle(menuId) {
        return proxyMethod(CTRL, 'toggle', menuId);
    }
    /**
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?}
     */
    enable(shouldEnable, menuId) {
        return proxyMethod(CTRL, 'enable', shouldEnable, menuId);
    }
    /**
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?}
     */
    swipeEnable(shouldEnable, menuId) {
        return proxyMethod(CTRL, 'swipeEnable', shouldEnable, menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?}
     */
    isOpen(menuId) {
        return proxyMethod(CTRL, 'isOpen', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?}
     */
    isEnabled(menuId) {
        return proxyMethod(CTRL, 'isEnabled', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?}
     */
    get(menuId) {
        return proxyMethod(CTRL, 'get', menuId);
    }
    /**
     * @return {?}
     */
    getOpen() {
        return proxyMethod(CTRL, 'getOpen');
    }
    /**
     * @return {?}
     */
    getMenus() {
        return proxyMethod(CTRL, 'getMenus');
    }
}
MenuController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MenuController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let dir = 'ltr';
let isRtl = false;
let lang = '';
class Platform {
    constructor() {
        initialize(this);
    }
    /**
     * @param {?} platformName
     * @return {?}
     */
    is(platformName) {
        return isImpl(this, platformName);
    }
    /**
     * @param {?} platformName
     * @return {?}
     */
    isAsync(platformName) {
        return isAsyncImpl(this, platformName);
    }
    /**
     * @return {?}
     */
    platforms() {
        return platformsImpl(this);
    }
    /**
     * @return {?}
     */
    platformsAsync() {
        return platformsAsyncImpl(this);
    }
    /**
     * @return {?}
     */
    versions() {
        return versionsImpl(this);
    }
    /**
     * @return {?}
     */
    versionsAsync() {
        return versionsAsyncImpl(this);
    }
    /**
     * @return {?}
     */
    ready() {
        return readyImpl(this);
    }
    /**
     * @return {?}
     */
    get isRTL() {
        return isRtl;
    }
    /**
     * @param {?} _dir
     * @param {?} updateDocument
     * @return {?}
     */
    setDir(_dir, updateDocument) {
        dir = _dir;
        isRtl = dir === 'rtl';
        if (updateDocument !== false) {
            document.documentElement.setAttribute('dir', dir);
        }
    }
    /**
     * @return {?}
     */
    dir() {
        return dir;
    }
    /**
     * @param {?} language
     * @param {?} updateDocument
     * @return {?}
     */
    setLang(language, updateDocument) {
        lang = language;
        if (updateDocument !== false) {
            document.documentElement.setAttribute('lang', language);
        }
    }
    /**
     * @return {?}
     */
    lang() {
        return lang;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getQueryParam(key) {
        return getQueryParamImpl(this, key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getQueryParamAsync(key) {
        return getQueryParamAsyncImpl(this, key);
    }
    /**
     * @return {?}
     */
    height() {
        return window.innerHeight;
    }
    /**
     * @return {?}
     */
    isLandscape() {
        return !this.isPortrait();
    }
    /**
     * @return {?}
     */
    isPortrait() {
        return window.matchMedia('(orientation: portrait)').matches;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    testUserAgent(expression) {
        return navigator.userAgent.indexOf(expression) >= 0;
    }
    /**
     * @return {?}
     */
    url() {
        return window.location.href;
    }
    /**
     * @return {?}
     */
    width() {
        return window.innerWidth;
    }
}
/**
 * @param {?} platform
 * @param {?} platformName
 * @return {?}
 */
function isImpl(platform, platformName) {
    if (platform._element && platform._element.is) {
        return platform._element.is(platformName);
    }
    return false;
}
/**
 * @param {?} platform
 * @param {?} platformName
 * @return {?}
 */
function isAsyncImpl(platform, platformName) {
    return getHydratedPlatform(platform).then(() => {
        return platform._element.is(platformName);
    });
}
/**
 * @param {?} platform
 * @return {?}
 */
function platformsImpl(platform) {
    if (platform._element && platform._element.platforms) {
        return platform._element.platforms();
    }
    return [];
}
/**
 * @param {?} platform
 * @return {?}
 */
function platformsAsyncImpl(platform) {
    return getHydratedPlatform(platform).then(() => {
        return platform._element.platforms();
    });
}
/**
 * @param {?} platform
 * @return {?}
 */
function versionsImpl(platform) {
    if (platform._element && platform._element.versions) {
        return platform._element.versions();
    }
    return [];
}
/**
 * @param {?} platform
 * @return {?}
 */
function versionsAsyncImpl(platform) {
    return getHydratedPlatform(platform).then(() => {
        return platform._element.versions();
    });
}
/**
 * @param {?} platform
 * @return {?}
 */
function readyImpl(platform) {
    return getHydratedPlatform(platform).then(() => {
        return platform._element.ready();
    });
}
/**
 * @param {?} platform
 * @param {?} key
 * @return {?}
 */
function getQueryParamImpl(platform, key) {
    if (platform._element && platform._element.getQueryParam) {
        return platform._element.getQueryParam(key);
    }
    return null;
}
/**
 * @param {?} platform
 * @param {?} key
 * @return {?}
 */
function getQueryParamAsyncImpl(platform, key) {
    return getHydratedPlatform(platform).then(() => {
        return platform._element.getQueryParam(key);
    });
}
/**
 * @param {?} platform
 * @return {?}
 */
function initialize(platform) {
    // first see if there is an ion-app, if there is, platform will eventually show up
    // if not, add platform to the document.body
    const /** @type {?} */ ionApp = document.querySelector('ion-app');
    if (ionApp) {
        return ionApp.componentOnReady(() => {
            platform._element = ionApp.querySelector('ion-platform');
        });
    }
    // okay, there isn't an ion-app, so add <ion-platform> to the document.body
    let /** @type {?} */ platformElement = document.querySelector('ion-platform');
    if (!platformElement) {
        platformElement = document.createElement('ion-platform');
        document.body.appendChild(platformElement);
    }
    platform._element = platformElement;
}
/**
 * @param {?} platform
 * @return {?}
 */
function getHydratedPlatform(platform) {
    if (!platform._element) {
        const /** @type {?} */ ionApp = document.querySelector('ion-app');
        return (/** @type {?} */ (ionApp)).componentOnReady(() => {
            const /** @type {?} */ platformEl = ionApp.querySelector('ion-platform');
            return platformEl.componentOnReady().then(() => {
                platform._element = platformEl;
                return platformEl;
            });
        });
    }
    return platform._element.componentOnReady();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastController extends OverlayBaseController {
    constructor() {
        super('ion-toast-controller');
    }
}
ToastController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ToastController.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @hidden
 */
class VirtualFooter {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualFooter.decorators = [
    { type: Directive, args: [{ selector: '[virtualFooter]' },] },
];
/** @nocollapse */
VirtualFooter.ctorParameters = () => [
    { type: TemplateRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @hidden
 */
class VirtualItem {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
}
VirtualItem.decorators = [
    { type: Directive, args: [{ selector: '[virtualItem]' },] },
];
/** @nocollapse */
VirtualItem.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @hidden
 */
class VirtualHeader {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualHeader.decorators = [
    { type: Directive, args: [{ selector: '[virtualHeader]' },] },
];
/** @nocollapse */
VirtualHeader.ctorParameters = () => [
    { type: TemplateRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VirtualContext {
    /**
     * @param {?} $implicit
     * @param {?} index
     * @param {?} count
     */
    constructor($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    /**
     * @return {?}
     */
    get first() { return this.index === 0; }
    /**
     * @return {?}
     */
    get last() { return this.index === this.count - 1; }
    /**
     * @return {?}
     */
    get even() { return this.index % 2 === 0; }
    /**
     * @return {?}
     */
    get odd() { return !this.even; }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class VirtualScroll {
    /**
     * @param {?} el
     * @param {?} cd
     */
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.el.nativeElement.itemRender = this.itemRender.bind(this);
    }
    /**
     * @param {?} el
     * @param {?} cell
     * @param {?=} index
     * @return {?}
     */
    itemRender(el, cell, index) {
        if (!el) {
            const /** @type {?} */ node = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), new VirtualContext(null, null, null), index);
            el = getElement(node);
            (/** @type {?} */ (el))['$ionView'] = node;
        }
        const /** @type {?} */ node = (/** @type {?} */ (el))['$ionView'];
        const /** @type {?} */ ctx = node.context;
        ctx.$implicit = cell.value;
        ctx.index = cell.index;
        node.detectChanges();
        return el;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getComponent(type) {
        switch (type) {
            case 0: return this.itmTmp.templateRef;
            case 1: return this.hdrTmp.templateRef;
            case 2: return this.ftrTmp.templateRef;
        }
        return null;
    }
}
VirtualScroll.decorators = [
    { type: Directive, args: [{
                selector: 'ion-virtual-scroll'
            },] },
];
/** @nocollapse */
VirtualScroll.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
VirtualScroll.propDecorators = {
    "itmTmp": [{ type: ContentChild, args: [VirtualItem,] },],
    "hdrTmp": [{ type: ContentChild, args: [VirtualHeader,] },],
    "ftrTmp": [{ type: ContentChild, args: [VirtualFooter,] },],
};
/**
 * @param {?} view
 * @return {?}
 */
function getElement(view) {
    const /** @type {?} */ rootNodes = view.rootNodes;
    for (let /** @type {?} */ i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function setIonicClasses(element) {
    const /** @type {?} */ classList = element.nativeElement.classList;
    classList.remove('ion-invalid');
    classList.remove('ion-valid');
    classList.remove('ion-touched');
    classList.remove('ion-untouched');
    classList.remove('ion-dirty');
    classList.remove('ion-pristine');
    classList.forEach((cls) => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BooleanValueAccessor {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = () => {
            /**/
        };
        this.onTouched = () => {
            /**/
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.element.nativeElement, 'checked', value);
        setIonicClasses(this.element);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonChange(value) {
        this.onChange(value);
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
BooleanValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
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
/** @nocollapse */
BooleanValueAccessor.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
BooleanValueAccessor.propDecorators = {
    "_handleIonChange": [{ type: HostListener, args: ['ionChange', ['$event.target.checked'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NumericValueAccessor {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = () => {
            /**/
        };
        this.onTouched = () => {
            /**/
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        // Probably not an issue for us, but it doesn't really cost anything either
        const /** @type {?} */ normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
        setIonicClasses(this.element);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleInputEvent(value) {
        this.onChange(value);
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = value => {
            fn(value === '' ? null : parseFloat(value));
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
NumericValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
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
/** @nocollapse */
NumericValueAccessor.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
NumericValueAccessor.propDecorators = {
    "_handleInputEvent": [{ type: HostListener, args: ['input', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RadioValueAccessor {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = () => {
            /**/
        };
        this.onTouched = () => {
            /**/
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.element.nativeElement, 'checked', value === this.value);
        setIonicClasses(this.element);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonSelect(value) {
        this.onChange(value);
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = () => {
            fn(this.value);
        };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
RadioValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
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
/** @nocollapse */
RadioValueAccessor.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
RadioValueAccessor.propDecorators = {
    "value": [{ type: Input },],
    "_handleIonSelect": [{ type: HostListener, args: ['ionSelect', ['$event.target.checked'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectValueAccessor {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = () => {
            /**/
        };
        this.onTouched = () => {
            /**/
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
        setIonicClasses(this.element);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleChangeEvent(value) {
        this.onChange(value);
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
SelectValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
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
/** @nocollapse */
SelectValueAccessor.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
SelectValueAccessor.propDecorators = {
    "_handleChangeEvent": [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TextValueAccessor {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onChange = () => {
            /**/
        };
        this.onTouched = () => {
            /**/
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
        setIonicClasses(this.element);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleInputEvent(value) {
        this.onChange(value);
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setTimeout(() => {
            setIonicClasses(this.element);
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
TextValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
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
/** @nocollapse */
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TextValueAccessor.propDecorators = {
    "_handleInputEvent": [{ type: HostListener, args: ['input', ['$event.target.value'],] },],
    "_handleBlurEvent": [{ type: HostListener, args: ['ionBlur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonNav {
    /**
     * @param {?} router
     */
    constructor(router) {
        console.log('ion-nav');
        router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                console.log('NavigationStart', ev.url);
            }
            else if (ev instanceof NavigationEnd) {
                console.log('NavigationEnd', ev.url);
            }
        });
    }
}
IonNav.decorators = [
    { type: Component, args: [{
                selector: 'ion-nav',
                template: '<ng-content></ng-content>',
                styles: [`
    ion-nav > :not(.show-page) { display: none; }
  `],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IonNav.ctorParameters = () => [
    { type: Router, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} views
 * @param {?} location
 * @param {?} ref
 * @param {?} activatedRoute
 * @return {?}
 */
function attachView(views, location, ref, activatedRoute) {
    initRouteViewElm(views, ref, activatedRoute);
    location.insert(ref.hostView);
}
/**
 * @param {?} views
 * @param {?} ref
 * @param {?} activatedRoute
 * @return {?}
 */
function initRouteViewElm(views, ref, activatedRoute) {
    views.push({
        ref: ref,
        urlKey: getUrlKey(activatedRoute),
        deactivatedId: -1
    });
    (/** @type {?} */ (ref.location.nativeElement)).classList.add('ion-page');
}
/**
 * @param {?} views
 * @param {?} activatedRoute
 * @return {?}
 */
function getExistingView(views, activatedRoute) {
    return views.find(vw => {
        return isMatchingActivatedRoute(vw.urlKey, activatedRoute);
    });
}
/**
 * @param {?} existingUrlKey
 * @param {?} activatedRoute
 * @return {?}
 */
function isMatchingActivatedRoute(existingUrlKey, activatedRoute) {
    const /** @type {?} */ activatedUrlKey = getUrlKey(activatedRoute);
    return activatedUrlKey === existingUrlKey;
}
/**
 * @param {?} views
 * @return {?}
 */
function getLastDeactivatedRef(views) {
    if (views.length < 2) {
        return null;
    }
    return views.sort((a, b) => {
        if (a.deactivatedId > b.deactivatedId)
            return -1;
        if (a.deactivatedId < b.deactivatedId)
            return 1;
        return 0;
    })[0].ref;
}
/**
 * @param {?} activatedRoute
 * @return {?}
 */
function getUrlKey(activatedRoute) {
    const /** @type {?} */ url = (/** @type {?} */ (activatedRoute.url)).value;
    return url.map(u => {
        return u.path + '$$' + JSON.stringify(u.parameters);
    }).join('/');
}
/**
 * @param {?} views
 * @param {?} ref
 * @return {?}
 */
function deactivateView(views, ref) {
    const /** @type {?} */ view = views.find(vw => vw.ref === ref);
    if (view) {
        view.deactivatedId = deactivatedIds++;
    }
}
/**
 * @param {?} views
 * @return {?}
 */
function destoryViews(views) {
    views.forEach(vw => {
        vw.ref.destroy();
    });
    views.length = 0;
}
/**
 * @record
 */

let deactivatedIds = 0;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} enteringRef
 * @param {?} leavingRef
 * @return {?}
 */
function runTransition(enteringRef, leavingRef) {
    const /** @type {?} */ enteringElm = (enteringRef && enteringRef.location && enteringRef.location.nativeElement);
    const /** @type {?} */ leavingElm = (leavingRef && leavingRef.location && leavingRef.location.nativeElement);
    if (!enteringElm && !leavingElm) {
        return Promise.resolve();
    }
    return transition(enteringElm, leavingElm);
}
/**
 * @param {?} enteringElm
 * @param {?} leavingElm
 * @return {?}
 */
function transition(enteringElm, leavingElm) {
    console.log('transition start');
    return new Promise(resolve => {
        setTimeout(() => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonRouterOutlet {
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     * @param {?} changeDetector
     */
    constructor(parentContexts, location, resolver, name, changeDetector) {
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
        parentContexts.onChildOutletCreated(this.name, /** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        destoryViews(this.views);
        this.parentContexts.onChildOutletDestroyed(this.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            const /** @type {?} */ context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route);
                }
                else {
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    get isActivated() { return !!this.activated; }
    /**
     * @return {?}
     */
    get component() {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        return this.activated.instance;
    }
    /**
     * @return {?}
     */
    get activatedRoute() {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        return /** @type {?} */ (this._activatedRoute);
    }
    /**
     * @return {?}
     */
    get activatedRouteData() {
        if (this._activatedRoute) {
            return this._activatedRoute.snapshot.data;
        }
        return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    detach() {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        const /** @type {?} */ cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    attach(ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        attachView(this.views, this.location, ref, activatedRoute);
    }
    /**
     * @return {?}
     */
    deactivate() {
        if (this.activated) {
            const /** @type {?} */ c = this.component;
            deactivateView(this.views, this.activated);
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    }
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    activateWith(activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        const /** @type {?} */ existingView = getExistingView(this.views, activatedRoute);
        if (existingView) {
            // we've already got a view hanging around
            this.activated = existingView.ref;
        }
        else {
            // haven't created this view yet
            const /** @type {?} */ snapshot = (/** @type {?} */ (activatedRoute))._futureSnapshot;
            const /** @type {?} */ component = /** @type {?} */ (/** @type {?} */ ((snapshot.routeConfig)).component);
            resolver = resolver || this.resolver;
            const /** @type {?} */ factory = resolver.resolveComponentFactory(component);
            const /** @type {?} */ childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            const /** @type {?} */ injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
            this.activated = this.location.createComponent(factory, this.location.length, injector);
            // keep a ref
            initRouteViewElm(this.views, this.activated, activatedRoute);
        }
        // Calling `markForCheck` to make sure we will run the change detection when the
        // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
        this.changeDetector.markForCheck();
        const /** @type {?} */ lastDeactivatedRef = getLastDeactivatedRef(this.views);
        runTransition(this.activated, lastDeactivatedRef).then(() => {
            console.log('transition end');
            this.activateEvents.emit(this.activated.instance);
        });
    }
}
IonRouterOutlet.decorators = [
    { type: Directive, args: [{ selector: 'ion-router-outlet', exportAs: 'ionOutlet' },] },
];
/** @nocollapse */
IonRouterOutlet.ctorParameters = () => [
    { type: ChildrenOutletContexts, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: undefined, decorators: [{ type: Attribute, args: ['name',] },] },
    { type: ChangeDetectorRef, },
];
IonRouterOutlet.propDecorators = {
    "activateEvents": [{ type: Output, args: ['activate',] },],
    "deactivateEvents": [{ type: Output, args: ['deactivate',] },],
};
class OutletInjector {
    /**
     * @param {?} route
     * @param {?} childContexts
     * @param {?} parent
     */
    constructor(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonTab {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('routerLink', this.tabLink, this.elementRef.nativeElement);
    }
}
IonTab.decorators = [
    { type: Directive, args: [{
                selector: 'ion-tab'
            },] },
];
/** @nocollapse */
IonTab.ctorParameters = () => [
    { type: ElementRef, },
];
IonTab.propDecorators = {
    "tabLink": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonTabs {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    ionTabbarClick(ev) {
        console.log('ionTabbarClick', ev);
        const /** @type {?} */ tabElm = /** @type {?} */ (ev.detail);
        if (tabElm && tabElm.href) {
            console.log('tabElm', tabElm.href);
            this.router.navigateByUrl(tabElm.href);
        }
    }
}
IonTabs.decorators = [
    { type: Directive, args: [{
                selector: 'ion-tabs'
            },] },
];
/** @nocollapse */
IonTabs.ctorParameters = () => [
    { type: Router, },
];
IonTabs.propDecorators = {
    "ionTabbarClick": [{ type: HostListener, args: ['ionTabbarClick', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const declarations = [
    VirtualFooter, VirtualScroll, VirtualHeader, VirtualItem,
    BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor,
    SelectValueAccessor, TextValueAccessor,
    IonNav, IonRouterOutlet, IonTab, IonTabs
];
class We7IonicModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
                { provide: APP_INITIALIZER, useFactory: setupProvideEvents, multi: true },
            ]
        };
    }
}
We7IonicModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ...declarations
                ],
                exports: [
                    ...declarations
                ]
            },] },
];
/** @nocollapse */
We7IonicModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularDelegate {
    /**
     * @param {?} appRef
     */
    constructor(appRef) {
        this.appRef = appRef;
    }
    /**
     * @param {?} cfr
     * @param {?} injector
     * @return {?}
     */
    create(cfr, injector) {
        return new AngularFrameworkDelegate(cfr, injector, this.appRef);
    }
}
AngularDelegate.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AngularDelegate.ctorParameters = () => [
    { type: ApplicationRef, },
];
class AngularFrameworkDelegate {
    /**
     * @param {?} cfr
     * @param {?} injector
     * @param {?} appRef
     */
    constructor(cfr, injector, appRef) {
        this.cfr = cfr;
        this.injector = injector;
        this.appRef = appRef;
        this.elRefMap = new WeakMap();
    }
    /**
     * @param {?} container
     * @param {?} component
     * @param {?=} data
     * @param {?=} cssClasses
     * @return {?}
     */
    attachViewToDom(container, component, data, cssClasses) {
        const /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(component);
        const /** @type {?} */ hostElement = document.createElement(componentFactory.selector);
        if (data) {
            Object.assign(hostElement, data);
        }
        const /** @type {?} */ childInjector = Injector.create([], this.injector);
        const /** @type {?} */ componentRef = componentFactory.create(childInjector, [], hostElement);
        for (const /** @type {?} */ clazz of cssClasses) {
            hostElement.classList.add(clazz);
        }
        container.appendChild(hostElement);
        this.appRef.attachView(componentRef.hostView);
        this.elRefMap.set(hostElement, componentRef);
        return Promise.resolve(hostElement);
    }
    /**
     * @param {?} _container
     * @param {?} component
     * @return {?}
     */
    removeViewFromDom(_container, component) {
        const /** @type {?} */ mountingData = this.elRefMap.get(component);
        if (mountingData) {
            mountingData.componentRef.destroy();
            this.elRefMap.delete(component);
        }
        return Promise.resolve();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalController extends OverlayBaseController {
    /**
     * @param {?} cfr
     * @param {?} injector
     * @param {?} angularDelegate
     */
    constructor(cfr, injector, angularDelegate) {
        super('ion-modal-controller');
        this.cfr = cfr;
        this.injector = injector;
        this.angularDelegate = angularDelegate;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.cfr, this.injector) }));
    }
}
ModalController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalController.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: AngularDelegate, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PopoverController extends OverlayBaseController {
    /**
     * @param {?} cfr
     * @param {?} injector
     * @param {?} angularDelegate
     */
    constructor(cfr, injector, angularDelegate) {
        super('ion-popover-controller');
        this.cfr = cfr;
        this.injector = injector;
        this.angularDelegate = angularDelegate;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.cfr, this.injector) }));
    }
}
PopoverController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PopoverController.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: AngularDelegate, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const win = (/** @type {?} */ (window));
const Ionic = win.Ionic;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { We7IonicModule, IonNav, IonRouterOutlet, IonTab, IonTabs, VirtualScroll, VirtualItem, VirtualHeader, VirtualFooter, AngularDelegate, ActionSheetController, AlertController, Events, LoadingController, MenuController, PickerController, ModalController, Platform, PopoverController, ToastController, BooleanValueAccessor as ɵd, NumericValueAccessor as ɵe, RadioValueAccessor as ɵf, SelectValueAccessor as ɵg, TextValueAccessor as ɵh, VirtualContext as ɵc, setupProvideEvents as ɵb, OverlayBaseController as ɵi, declarations as ɵa };
//# sourceMappingURL=we7-ionic.js.map
