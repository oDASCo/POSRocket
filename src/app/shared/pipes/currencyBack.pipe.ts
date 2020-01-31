import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currencyBack'
})
export class CurrencyBackPipe implements PipeTransform {
    transform(item, isBack) {
        if (isBack) {
            item = String(item);
            return +(item.replace('$', "").replace(",", ""));
        } else {
            item = String(item);
            if (!item.startsWith('$')) {
                return '$' + item;
            }
            return item;
        }
    }
}
