import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import {
  MatDemoService,
} from './mat-demo.service';

@Component({
  selector: 'ngx-mat-demo',
  templateUrl: './mat-demo.component.html',
  styleUrls: ['./mat-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatDemoComponent implements OnInit {
  /**
   * absolute url, e.g.:
   * /assets/demo
   */
  @Input()
  path: string;
  @Input()
  title: string;
  @Input()
  desc: string;

  suffixes = ['html', 'ts', 'scss'];
  codes: {
    [suffix: string]: string,
  } = {};

  compName = '';

  constructor(
    private _http: HttpClient,
    private _config: MatDemoService,
  ) { }

  ngOnInit() {
    this._init();
  }

  private _init() {
    const pathArr = `${this._config.baseUrl}/${this.path}`.split('/').filter(v => !!v);

    if (pathArr.length === 0) {
      throw new Error('Invalid path!');
    }

    const compFilename = pathArr[pathArr.length - 1];
    const compPath = '/' + pathArr.join('/');

    this.suffixes.forEach(suffix => {
      const url = `${compPath}/${compFilename}.component.${suffix}`;
      this._http.get(url, {
        responseType: 'text',
      }).subscribe(res => {
        this.codes[suffix] = res;
      });
    });

    // default title
    this.compName = compFilename.replace(/-(\w)/g, (match, p1) => match && p1.toUpperCase()).replace(/\w/, match => match.toUpperCase());
  }
}

