import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currencyBack'
})
export class CurrencyBackPipe implements PipeTransform {
    transform(item, isBack) {
        if (isBack) {
            return +(item.replace('$', "").replace(",", ""));
        } else {
            if (!item.startsWith('$')) {
                return '$' + item;
            }
            return item;
        }
    }
}
