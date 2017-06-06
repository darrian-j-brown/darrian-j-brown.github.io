(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };

        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        game.addGameItem(myObstacle);
        // BEGIN EDITING YOUR CODE HERE
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = 400;
            myObstacle.y = 200;
            var obstacleImage = draw.bitmap('img/sawblade.png');
             myObstacle.addChild(obstacleImage);
            
           
            
            
            
            
            
            
            
            
            

    }
})(window);
