import { Buy } from "./components/buy/";

export class Client {
  /**
   * The Client class that all interaction via the lib is done by
   * @description The Client class that all interaction via the lib is done by
   * @param {IConstructorOptions} options
   */
  private options: IConstructorOptions = {
    api: {
      key: "",
    },
    locale: "",
  };

  constructor(options: IConstructorOptions) {
   this.options = options;
  }
public buy = new Buy(this.options);
}
export interface IConstructorOptions  {
  /**
   * Interface Type for the constructor options in the Client and all sub classes
   */
  api: {
    key: string;
  };
  locale: string;
}
