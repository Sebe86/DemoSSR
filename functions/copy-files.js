const fs = require('fs-extra');

(async() => {

    const src = '../dist/angular.io-example';
    const copy = './dist/angular.io-example';

    await fs.remove(copy);
    await fs.copy(src, copy);

})();