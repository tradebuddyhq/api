import Buy from "./components/buy/";
export class Client {
  private options: IConstructorOptions;
  constructor(options: IConstructorOptions) {
   this.options = options;
  }
public buy = new buy(this.options);
}
interface IConstructorOptions = {
  api: {
    key: string;
  };
  locale: string;
}
