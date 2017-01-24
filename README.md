## Website Performance Optimization Project

Project for completion of [Udacity's Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

The challenge was to optimize the portfolio for speed - optimizing the critical rendering path to make the page render as quickly as possible.

### Optimizations:

####Part 1: Optimized PageSpeed Insights score for ```index.html```

- The task runner [Grunt](http://gruntjs.com/), with the plugin [Grunt Responsive Images](https://github.com/andismith/grunt-responsive-images) was used to optimize images. For more information on using Grunt Responsive Images, check below under **Build tools used**.
- Original images were moved to ```views/images_src/``` or ```img/``` folder, and optimized images were added to ```views/images``` or ```img/``` folder.
- All code from ```style.css``` and ```print.css``` was moved inline to ```index.html``` to stop render-blocking css
- Original Google Analytics information was removed to add my own GA information
- The Google web font loading was updated to use the [WebFontLoader](https://github.com/typekit/webfontloader) method to load fonts asynchronously to remove render-blocking css and improve page speed.



####Part 2: Optimized Frames per Second in ```pizza.html``` (via updates to code in ```views/js/main.js```)

- Simplified the ```changePizzaSizes()``` function (line 466), removing all unnecessary DOM calls and an unnecessary loop, to resolve Forced Synchronous Layout
- Refactored the ```updatePositions()``` function (line 526), removing unnecessary DOM calls within the loop, and adding variables outside of the loop instead of calculating them within the loop. Used ```style.transform``` for movement of pizza images instead of ```style.left``` for improved speed
- On line 573, reduced the amount of pizzas being painted to 53 to improve performance. 53 was chosen because it fills the page on mobile, as well as on desktop



###Build tools used:

Task runner [Grunt](http://gruntjs.com/), with the plugin [Grunt Responsive Images](https://github.com/andismith/grunt-responsive-images) was used to optimize images.

####To use Grunt Responsive Images:
1. Follow instructions on the [Grunt Getting Started](http://gruntjs.com/getting-started) page to install Grunt and to get started with using grunt in a project folder

2. Once Grunt has successfully been installed and the ```package.json``` file has been created, follow instructions to install the [Grunt Responsive Images](https://github.com/andismith/grunt-responsive-images) plugin

3. A sample Gruntfile is [available here](http://gruntjs.com/sample-gruntfile). A sample Gruntfile using Responsive Images is [available here](https://github.com/andismith/grunt-responsive-images) under **Usage Examples**

4. To when installation is complete and the Gruntfile has been created and customized, run ```grunt responsive-images``` in the command line to optimize images
