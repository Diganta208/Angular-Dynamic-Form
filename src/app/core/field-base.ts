export class FieldBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    row: number;
    cols: number;
    name: string;
    minLength: number;
    options: {key: string, value: string}[];
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        row?: number;
        cols?: number;
        type?: string;
        name?: string;
        minLength?: number;
        options?: {key: string, value: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.minLength = options.minLength === undefined ? 6 : options.minLength;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.name = options.name || '';
      this.row = options.row === undefined ? 1 : options.row;
      this.cols = options.cols === undefined ? 1 : options.cols;
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }
