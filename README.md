Image Swap
----------
This is a simple library that handles changing src attribute on a selected image tag. To be used for a large heade images croped for diferent screen resolution.

**NB!** This solution will not save the traffic. Large image will be loaded anyway.

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

This kind of automatic resize/cropping can be easily accomplished by folowwing Grunt and Gulp plugins:

 1. [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images)
 2. [grunt-clowncar](https://npmjs.org/package/grunt-clowncar)
 3. [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)



Basic Setup
----------
 1. Include it on your page:	 

        <script src="image-swap.js"></script>

 2. Get the image ID: 

        var pictureId = document.getElementById('picture');

 3. Define the options:
	
        var options = {
            picture: pictureId,
            name: 'picture.jpg',
            path: '/assets/images/',
            resolutions: {
                small: 320,
                medium: 1024,
                large: 1350
            }
        };

 4. Pass it to a new object:

        var Sizes = new ImageSwap(options);

 5. Optionally, call update method on window resize to see the changes right away:
 
        window.addEventListener('resize', function (event) {
            Sizes.update();
        });

Options
-------

**picture** - ID of target <img> element.

**name** - filename of the image.

**path** - full path to the image.

**resolutions** - definition of small, medium and large screen sizes. This number will append to your **path** option.