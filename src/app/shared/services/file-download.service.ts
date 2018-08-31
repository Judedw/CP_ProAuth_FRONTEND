import { Injectable } from "@angular/core";

interface IFileInformation {
  name?: string;
  type?: string;
  data?: any;
}

@Injectable()
export class AppFileDownloadService {
  constructor() {}

  private getTypeString(type: string): string {
    switch (type) {
      case "csv":
        return "text/csv;charset=utf-8;";

      default:
        return "undefined";
    }
  }



  downloadFile(fileInfor: IFileInformation) {
    let type = this.getTypeString(fileInfor.type);
    let blob = new Blob([fileInfor.data], { type: type });

    const downloadLnk = document.createElement("a");
    let url = URL.createObjectURL(blob);

    const isSafariBrowser =
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1;
    if (isSafariBrowser) {
      // if Safari open in new window to save file with random filename.
      downloadLnk.setAttribute("target", "_blank");
    }

    downloadLnk.setAttribute("href", url);
    downloadLnk.setAttribute("download", fileInfor.name+'.'+fileInfor.type);
    downloadLnk.style.visibility = "hidden";
    document.body.appendChild(downloadLnk);
    downloadLnk.click();
    document.body.removeChild(downloadLnk);
  }
}
