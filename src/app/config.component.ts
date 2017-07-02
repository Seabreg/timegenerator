import { Component } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'config',
    styles: [],
    templateUrl: './config.component.html'
})

export class ConfigComponent {

    componentName: 'ConfigComponent';

    public model: Config = new Config();

    public fileSelected(file) {
        this.model.file = file;
        this.model.fileChanged = true;
    }
}
