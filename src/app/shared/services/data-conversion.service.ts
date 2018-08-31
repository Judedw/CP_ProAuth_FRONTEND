import { Injectable } from "../../../../node_modules/@angular/core";



@Injectable()
export class AppDataConversionService{


  convertToCsv(dataArray): string {
    let arr = typeof dataArray != "object" ? JSON.parse(dataArray) : dataArray;

    let str = "";
    let row = "";
    for (var index in dataArray[0]) {
      row += index + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";

    for (var i = 0; i < arr.length; i++) {
      var line = "";
      for (var index in arr[i]) {
        if (line != "") line += ",";

        line += arr[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  }

}
