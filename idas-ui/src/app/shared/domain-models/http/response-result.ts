export class ResponseResult {
  data: any;
  hasData: boolean;
  dataCount: number;
  hasError: boolean;
  message: string

  constructor(data?: any, hasData?: boolean, dataCount?: number, hasError?: boolean, message?: string){
    this.data = data;
    this.hasData = hasData;
    this.dataCount = dataCount;
    this.hasError = hasError;
    this.message = message;
  }

}