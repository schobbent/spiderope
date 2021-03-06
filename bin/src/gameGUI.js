define(["gui", "canvasParams"], function(GUI, canvasParams){
  
  var GameOverGUI =  function()
  {
    
    var myGUI;
    var _eventBus;
    var _imagesManager;
    
    var deleteTutoVisu;

    this.setup = function(eventBus, imagesManager)
    {
      _eventBus = eventBus;
      _imagesManager = imagesManager;
      
      myGUI = new GUI();
      this.gui = myGUI;
    }

    this.sayToDeleteRope = function()
    {
      deleteTutoVisu = new myGUI.Visuel(_imagesManager.getImage("droptherope"), {"x" : 500, "y" : 300, "w" : (513 * 0.4), "h":(113 * 0.4)});
      myGUI.add(deleteTutoVisu, "deleterope");
    }

    this.stopSayToDeleteRope = function()
    {
      if (deleteTutoVisu)
        myGUI.del(deleteTutoVisu);
    }

    this.update = function() {
      myGUI.draw(this.ctx);  
    }
    
    this.draw = function(ctx)
    {
      myGUI.draw(ctx);
    }
  }
  
  return GameOverGUI;
});