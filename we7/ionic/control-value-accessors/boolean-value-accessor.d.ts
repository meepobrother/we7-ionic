import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class BooleanValueAccessor implements ControlValueAccessor {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer2);
    onChange: (value: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    _handleIonChange(value: any): void;
    _handleBlurEvent(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
