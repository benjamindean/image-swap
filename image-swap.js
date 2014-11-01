// Copyright (c) 2014 Benjamin Dean

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


(function (window, document, undefined) {

    'use strict';

    var ImageSwap = function(options) {
        this.init(options);
    };

    ImageSwap.prototype = {

        init: function (options) {
            this.settings(options);
            this.run();
        },
        settings: function (options) {
            this.config = {
                picture: options.picture || this.config.picture,
                path: options.path || this.config.path,
                name: options.name || this.config.name,
                resolutions: options.resolutions || this.config.resolutions
            };
        },
        getWidth: function () {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        run: function () {

            var width = this.getWidth();
            var config = this.config;

            switch (true) {
                case width <= config.resolutions.small:
                    config.picture.setAttribute("src", config.path + config.resolutions.small + "/" + config.name);
                    break;
                case width <= config.resolutions.medium:
                    config.picture.setAttribute("src", config.path + config.resolutions.medium + "/" + config.name);
                    break;
                case width <= config.resolutions.large:
                    config.picture.setAttribute("src", config.path + config.resolutions.large + "/" + config.name);
                    break;
                default:
                    config.picture.setAttribute("src", config.path + config.name);
            }
        },
        update: function () {
            this.run();
        }
    };

    window.ImageSwap = ImageSwap;

})(window, document);

var pictureId = document.getElementById('picture');

var options = {
    picture: pictureId,
    name: 'picture.jpg',
    path: '/assets/i/',
    watch: true,
    resolutions: {
        small: 320,
        medium: 1024,
        large: 1350
    }
};

var Sizes = new ImageSwap(options);

window.addEventListener('resize', function (event) {
    Sizes.update();
});