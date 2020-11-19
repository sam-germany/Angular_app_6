import { Pipe, PipeTransform } from '@angular/core';


const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabyte'];

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeInBytes: number, longForm?: boolean): string {
 //   console.log(sizeInBytes);
 //   console.log(longForm);

    const units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
 //   console.log(units);

    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
 //   console.log(power);

    power = Math.min(power, units.length - 1);
 //   console.log(power);


    const size = sizeInBytes / Math.pow(1024, power);
 //   console.log(size);

    const formattedSize = Math.round(size * 100) / 100;
 //   console.log(formattedSize);

    const unit = units[power];
 //   console.log(unit);
 //   console.log('----------');

    return size ? `${formattedSize} ${unit}` : '0';








  }

}
