(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var buildings = [];


        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            backgroundBox = draw.rect(100,100,'Blue');
            backgroundBox.x = 0;
            backgroundBox.y = 0;
            background.addChild(backgroundBox);

            background.removeAllChildren();
            
            
            

    
            // TODO: 3 - YOUR DRAW CODE GOES HERE
            var shape; 
            var circle;
            

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'black');
            background.addChild(backgroundFill);
            
            shape = draw.circle(10, 'red', 'red', 10);
            shape.x = 100;
            shape.y = 45;
            
            background.addChild(shape);
            
            backgroundBox = draw.rect(100,100,'Blue');
            backgroundBox.x = 400;
            backgroundBox.y = 390;
            // background.addChild(backgroundBox);
            
            
    
            for(var i=0;i<100;i++) {
                circle = draw.circle(10,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = canvasHeight*Math.random();
                background.addChild(circle);
                
            }
            
            var moon = draw.bitmap('img/moon.png');
            moon.x = 1200;
            moon.y = 25;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x = backgroundBox.x - 1;
            if(backgroundBox.x < -100) {
                backgroundBox.x = canvasWidth;
            }
            

            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
}(window));