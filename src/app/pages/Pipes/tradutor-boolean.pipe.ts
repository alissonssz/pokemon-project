import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tradutorBoolean'
})
export class TradutorBooleanPipe implements PipeTransform {

    transform(value: any, ...args: any) {
        return value? 'Sim' : 'Não'
    }
    
}