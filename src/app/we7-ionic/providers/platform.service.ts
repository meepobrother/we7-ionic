
import { PlatformConfig } from '@ionic/core';

export type DocumentDirection = 'ltr' | 'rtl';

let dir: DocumentDirection = 'ltr';
let isRtl = false;
let lang = '';

export class Platform {

  _element: HTMLIonPlatformElement;
  constructor() {
    initialize(this);
  }

  is(platformName: string): boolean {
    return isImpl(this, platformName);
  }

  isAsync(platformName: string): Promise<boolean> {
    return isAsyncImpl(this, platformName);
  }

  platforms(): string[] {
    return platformsImpl(this);
  }

  platformsAsync(): Promise<string[]> {
    return platformsAsyncImpl(this);
  }

  versions(): PlatformConfig[] {
    return versionsImpl(this);
  }

  versionsAsync(): Promise<PlatformConfig[]> {
    return versionsAsyncImpl(this);
  }

  ready(): Promise<any> {
    return readyImpl(this);
  }

  get isRTL(): boolean {
    return isRtl;
  }

  setDir(_dir: DocumentDirection, updateDocument: boolean) {
    dir = _dir;
    isRtl = dir === 'rtl';

    if (updateDocument !== false) {
      document.documentElement.setAttribute('dir', dir);
    }
  }
  dir(): DocumentDirection {
    return dir;
  }
  setLang(language: string, updateDocument: boolean) {
    lang = language;
    if (updateDocument !== false) {
      document.documentElement.setAttribute('lang', language);
    }
  }
  lang(): string {
    return lang;
  }
  getQueryParam(key: string): string {
    return getQueryParamImpl(this, key);
  }
  getQueryParamAsync(key: string): Promise<string> {
    return getQueryParamAsyncImpl(this, key);
  }
  height(): number {
    return window.innerHeight;
  }
  isLandscape(): boolean {
    return !this.isPortrait();
  }
  isPortrait(): boolean {
    return window.matchMedia('(orientation: portrait)').matches;
  }
  testUserAgent(expression: string): boolean {
    return navigator.userAgent.indexOf(expression) >= 0;
  }
  url() {
    return window.location.href;
  }
  width() {
    return window.innerWidth;
  }
}

export function isImpl(platform: Platform, platformName: string) {
  if (platform._element && platform._element.is) {
    return platform._element.is(platformName);
  }
  return false;
}

export function isAsyncImpl(platform: Platform, platformName: string) {
  return getHydratedPlatform(platform).then(() => {
    return platform._element.is(platformName);
  });
}

export function platformsImpl(platform: Platform): string[] {
  if (platform._element && platform._element.platforms) {
    return platform._element.platforms();
  }
  return [];
}

export function platformsAsyncImpl(platform: Platform): Promise<string[]> {
  return getHydratedPlatform(platform).then(() => {
    return platform._element.platforms();
  });
}

export function versionsImpl(platform: Platform): PlatformConfig[] {
  if (platform._element && platform._element.versions) {
    return platform._element.versions();
  }
  return [];
}

export function versionsAsyncImpl(platform: Platform): Promise<PlatformConfig[]> {
  return getHydratedPlatform(platform).then(() => {
    return platform._element.versions();
  });
}

export function readyImpl(platform: Platform) {
  return getHydratedPlatform(platform).then(() => {
    return platform._element.ready();
  });
}

export function getQueryParamImpl(platform: Platform, key: string): string {
  if (platform._element && platform._element.getQueryParam) {
    return platform._element.getQueryParam(key);
  }
  return null;
}

export function getQueryParamAsyncImpl(platform: Platform, key: string) {
  return getHydratedPlatform(platform).then(() => {
    return platform._element.getQueryParam(key);
  });
}




export function initialize(platform: Platform) {
  // first see if there is an ion-app, if there is, platform will eventually show up
  // if not, add platform to the document.body
  const ionApp = document.querySelector('ion-app');
  if (ionApp) {
    return ionApp.componentOnReady(() => {
      platform._element = ionApp.querySelector('ion-platform');
    });
  }

  // okay, there isn't an ion-app, so add <ion-platform> to the document.body
  let platformElement = document.querySelector('ion-platform');
  if (!platformElement) {
    platformElement = document.createElement('ion-platform');
    document.body.appendChild(platformElement);
  }
  platform._element = platformElement;
}

export function getHydratedPlatform(platform: Platform): Promise<HTMLIonPlatformElement> {
  if (!platform._element) {
    const ionApp = document.querySelector('ion-app');
    return (ionApp as any).componentOnReady(() => {
      const platformEl = ionApp.querySelector('ion-platform');
      return platformEl.componentOnReady().then(() => {
        platform._element = platformEl;
        return platformEl;
      });
    });
  }
  return platform._element.componentOnReady();
}
