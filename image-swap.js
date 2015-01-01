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