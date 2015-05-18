
# Device constructor shorthand that defaults to @1x

Quickly setup a device canvas with `Screen` dimensions that default to relative
points, so that you can design @1x. This is great for handing to engineers who
will use the source as design specs.

## Usage
```shell
$ framer myProject &
$ cd myProject
$ npm install --save peteschaffner/framer-device
```

app.js:
```javascript
var Device = require('framer-device')

new Device({ deviceType: 'iphone-6-gold' })
```
