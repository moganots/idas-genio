import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  transform(bytes, decimals = 2) {
    if (isNaN(bytes) || bytes <= 0) return '0 bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
