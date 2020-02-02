## Famicom Disk System Soft List
### Family Computer Disk System （NES） soft list of release dates

[![NPM Version](https://img.shields.io/npm/v/@game-soft/disk-system.svg)](https://www.npmjs.com/package/@game-soft/disk-system)
[![NPM Downloads](http://img.shields.io/npm/dm/@game-soft/disk-system.svg)](https://www.npmjs.com/package/@game-soft/disk-system)

### file data tree

```
└── data
    ├── soft_list.json
    ├── soft_list.js
    ├── soft_list.csv
    ├── soft_list.yaml
    └── soft_list.txt
```

### Installation

```
npm install @game-soft/disk-system
```

### Usage

```
const diskSystemSoftList = require("@game-soft/disk-system")

diskSystemSoftList // => [{ 
  "id": 1, "release_date": "1986-02-21", "title": "ゼルダの伝説", "publisher": "任天堂", "bit_memory": "", "price": 2600
},
{
  "id": 2, "release_date": "1986-02-21", "title": "スーパーマリオブラザーズ.", "publisher": "任天堂", "bit_memory": "", "price": 2500
},
...]
```

### soft_list.csv

|id|release_date|title|publisher|bit_memory|price|
|:-:|:-:|:--|:--|:-:|:-:|
|1|1986-02-21|ゼルダの伝説|任天堂|| 2600|
||

## Other
### Author

**Name** :
Daisuke Takayama

**Country** :
Japan

**Job** :
FrontEnd Engineer

**twitter**

[@webcyou](https://twitter.com/webcyou)
[@panicdragon](https://twitter.com/panicdragon)

