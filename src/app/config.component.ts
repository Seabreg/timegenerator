import { Component, Output, EventEmitter } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'config',
    styles: [],
    templateUrl: './config.component.html'
})

export class ConfigComponent {

    componentName: 'ConfigComponent';

    @Output() saveEvent:EventEmitter<any> = new EventEmitter();

    public model: Config = new Config();

    public fileSelected(file) {
        this.model.file = file;
        this.model.fileChanged = true;
    }

    public save() {
        this.saveEvent.emit();
    }
}
