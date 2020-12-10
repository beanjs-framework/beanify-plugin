# beanify-plugin

## install

```bash
npm install beanify-plugin 
```

## usage

```javascript
const beanifyPlugin=require('beanify-plugin')

let plugin =beanifyPlugin((beanify,opts,done)=>{

    done()
},{
    // prefix:string, //route prefix
    // scoped: boolean, 
    // name: string, //plugin name
    // beanify:string, //beanify version
    // dependencies:string [], 
    // decorators:string [],
    // options:object //default opts
})

let isScoped=plugin[beanifyPlugin.pluginScoped]
let meta=plugin[beanifyPlugin.pluginMeta]
let prefix=plugin[beanifyPlugin.pluginPrefix]

```