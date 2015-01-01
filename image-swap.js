-// Copyright (c) 2015 Benjamin Dean
-
-// Permission is hereby granted, free of charge, to any person obtaining a copy
-// of this software and associated documentation files (the "Software"), to deal
-// in the Software without restriction, including without limitation the rights
-// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
-// copies of the Software, and to permit persons to whom the Software is
-// furnished to do so, subject to the following conditions:
-
-// The above copyright notice and this permission notice shall be included in all
-// copies or substantial portions of the Software.
-
-// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-// SOFTWARE

(function(window, document, undefined) {

    'use strict';

    var ImageSwap = function(options) {
        this.init(options);
    };

    ImageSwap.prototype = {

        init: function(options) {
            this.settings(options);
            this.run();
        },
        settings: function(options) {
            this.config = {
                picture: options.picture || this.config.picture,
                path: options.path || this.config.path,
                name: options.name || this.config.name,
                resolutions: options.resolutions || this.config.resolutions
            };
        },
        getWidth: function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        _setSrc: function(size) {
            return this.config.picture.setAttribute("src", this.config.path + size + "/" + this.config.name);
        },
        run: function() {

            var width = this.getWidth(),
                config = this.config,
                index;

            for (index in config.resolutions) {
                if (width <= config.resolutions[index]) {
                    this._setSrc(config.resolutions[index]);
                } else {
                    config.picture.setAttribute("src", config.path + config.name);
                }
            }
        },
        update: function() {
            this.run();
        }
    };

    window.ImageSwap = ImageSwap;

})(window, document);