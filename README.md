Image Swap
----------
This is a simple library that handles changing *src* attribute on a selected image tag. To be used for a large header images cropped for different screen resolutions.

**NB!** The *src* attribute of a target *img* should be initially empty to prevent original large picture from loading. Use it if you need a fully cross-browser solution. Currently tested on **IE6-IE11**. Other browsers are supported as well.

How it works
------------

You should have something like that for you directory structure under the main image **path**:

    .
    ├── 1024
    │   └── picture.jpg
    ├── 320
    │   └── picture.jpg
    ├── 800
    │   └── picture.jpg
    └── picture.jpg

This kind of automatic resize/cropping can be easily accomplished by following Grunt and Gulp plugins:

 1. [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images)
 2. [grunt-clowncar](https://npmjs.org/package/grunt-clowncar)
 3. [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)



Basic Setup
----------
 1. Include it on your page:	 

        <script type="text/javascript" src="image-swap.js"></script>

 2. Get the image element:

 		<img id="picture" src=""/>

        var **pictureId** = document.getElementById('picture');

 3. Define the options:
	
        var options = {
            picture: **pictureId**,
            name: 'picture.jpg',
            path: '/assets/images/',
            resolutions: {
                small: 320,
                medium: 1024,
                large: 1350
            }
        };

 4. Pass the options to a newly created object:

        var **Sizes** = new ImageSwap(options);

 5. Optionally, call an update method on window resize event to see the changes right away:
 
        window.addEventListener('resize', function() {
            **Sizes**.update();
        });

Options
-------

**picture** - ID of a target <img> element.

**name** - filename of the image.

**path** - full path to the image.

**resolutions** - definition of *small*, *medium* and *large* screen sizes. This number will append to your **path** option.