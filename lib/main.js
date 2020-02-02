(function() {
    'use strict';
    var diskSystemSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return diskSystemSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = diskSystemSoftList;
    } else {
        window.gameSoft = {
            diskSystem: diskSystemSoftList
        };
    }
})();