import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {


    //agrega la clase open cuando isOpen es = true
    @HostBinding('class.open') isOpen: boolean = false;
    
    @HostListener('click') onClick(){
        
        this.isOpen = !this.isOpen;
    }

    constructor(private elRef: ElementRef , private renderer: Renderer2) {}
     


}