import { Injectable } from '@angular/core';


@Injectable()
export class Events {
  private c: { [topic: string]: Function[] } = [] as any;
  subscribe(topic: string, ...handlers: Function[]) {
    if (!this.c[topic]) {
      this.c[topic] = [];
    }
    handlers.forEach((handler) => {
      this.c[topic].push(handler);
    });
  }
  unsubscribe(topic: string, handler: Function = null) {
    const t = this.c[topic];
    if (!t) {
      return false;
    }

    if (!handler) {
      delete this.c[topic];
      return true;
    }

    const i = t.indexOf(handler);

    if (i < 0) {
      return false;
    }
    t.splice(i, 1);
    if (!t.length) {
      delete this.c[topic];
    }

    return true;
  }
  publish(topic: string, ...args: any[]) {
    const t = this.c[topic];
    if (!t) {
      return null;
    }

    const responses: any[] = [];
    t.forEach((handler: any) => {
      responses.push(handler(...args));
    });
    return responses;
  }
}


export function setupEvents() {
  const events = new Events();

  window.addEventListener('online', ev => events.publish('app:online', ev));

  window.addEventListener('offline', ev => events.publish('app:offline', ev));

  window.addEventListener('orientationchange', ev => events.publish('app:rotated', ev));

  return events;
}


export function setupProvideEvents() {
  return function () {
    return setupEvents();
  };
}
