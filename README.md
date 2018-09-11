# Angualr Material Demo Component
[demo](https://stackblitz.com/edit/sora-angular-material-demo)

# Installation

```bash
npm install --save-dev @petkit/ngx-material-demo
```

This package depend on [@petkit/ngx-highlight](https://github.com/petkit-io/ngx-highlight) to highlight code.

# Usage
## Import Module

```ts
import {
  MatDemoModule,
} from '@petkit/ngx-material-demo';
@NgModule({
  imports: [
    MatDemoModule.forRoot({
      // http request base url(Notice: It's a absolute url)
      baseUrl: '/assets/demo'
    })
  ],
})
```

## HTML

```html
<ngx-mat-demo path="button" title="Button">
  <button mat-button>Button</button>
</ngx-mat-demo>
```

The value of `path` will be translated to
- `/assets/demo/button.component.html`
- `/assets/demo/button.component.ts`
- `/assets/demo/button.component.scss`

You can assign value to `suffixes`, but `.component` will always add to all suffixes.

```ts
MatDemoModule.forRoot({
  baseUrl: '/assets/demo',
  suffixes: ['html', 'ts', 'css']
})
```

# License
MIT

