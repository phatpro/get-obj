# get-obj

Filter and replace key/value object to new object

### Installation

```sh
npm install get-obj
```

### Usage

```sh
const getObj = require('get-obj');

const exampleObj = {
    id: 1,
    title: 'phatpro',
    details: {
        description: 1,
        createAt: 1,
        updateAt: 1
    }
}

// Filter
var newObj = getObj(exampleObj, (key, value) => key.indexOf('title') === 0)
// { title: 'phatpro' }

// Filter and replace key
var newObj = getObj(exampleObj, (key, value) => key.indexOf('title') === 0 && 'hiThere')
// { hiThere: 'phatpro' }

// Filter and replace key/value
var newObj = getObj(exampleObj, (key, value) => key.indexOf('title') === 0 && ['hiThere', 'hi'])
// { hiThere: 'hi' }
```

### Params

-   obj: origin object
-   predicate: predicate function

## License

MIT © phatpro
