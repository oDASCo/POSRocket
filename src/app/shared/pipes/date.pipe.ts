import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {
    transform(item) {
        return item.replace('T', " ").slice(0, 16);
    }
}
