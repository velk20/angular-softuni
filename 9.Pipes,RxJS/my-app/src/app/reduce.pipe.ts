import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: true, //by Default, result is memorized/cached
  pure: false, // not memorized, invoke on every change
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    callbackFn: (acc: any, curr: any) => any,
    initialValue: T
  ): unknown {
    return array.reduce(callbackFn, initialValue);
  }
}
