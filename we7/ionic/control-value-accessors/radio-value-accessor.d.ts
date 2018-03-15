import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class RadioValueAccessor implements ControlValueAccessor {
    private element;
    private renderer;
    value: any;
    onChange: (value: any) => void;
    onTouched: () => void;
    constructor(element: ElementRef, renderer: Renderer2);
    writeValue(value: any): void;
    _handleIonSelect(value: any): void;
    _handleBlurEvent(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
