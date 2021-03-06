// Your code goes here
//task1
NodeList.prototype.forEach = Array.prototype.forEach;

function my_$(dom){
  this.elements = document.querySelectorAll(dom);
  this.length = this.elements.length;
  var _this = this;
  
  this.width = function(newWidth){
    if(newWidth === undefined){
      var tmpArr = [];
      elements.forEach(function(item){
        var tmp = getStyle(item, 'width');
        if(tmp === undefined){
          tmpArr.push("0px");
        }
        else{
          tmpArr.push(tmp);
        }
      });
      
      return tmpArr;
    }
    else{
      elements.forEach(function(item){
        item.style.width = newWidth;
      });
      
      return _this;
    }
  }
  
  this.height = function(newHeight){
        if(newHeight === undefined){
      var tmpArr = [];
      elements.forEach(function(item){
        var tmp = getStyle(item, 'height');
        if(tmp === undefined){
          tmpArr.push("0px");
        }
        else{
          tmpArr.push(tmp);
        }
      });
      
      return tmpArr;
    }
    else{
      elements.forEach(function(item){
        item.style.height = newHeight;
      });
      
      return _this;
    }
  }
  
  this.css = function(property, param, timing){
    if(typeof(property) == 'object'){
      if(param != undefined){
        
        setTimeout(function(){
          for(prop in property) {
            elements.forEach(function(item) {
              item.style[prop] = property[prop];
            });
          }
        }, param);
        
        return _this;
      } else {
        
        for(prop in property) {
          elements.forEach(function(item) {
            item.style[prop] = property[prop];
          });
        }
        
        return _this;
      }
      
    }
    else {
      if(timing != undefined){
        setTimeout(function(){
          elements.forEach(function(item){
            item.style[property] = param
          });
        }, timing);
        
        return _this;
      } else{
        elements.forEach(function(item){
          item.style[property] = param
        });
        
        return _this;
      }
    }
  }
  return this;
  
  
}


function getStyle(oElm, strCssRule){
  var strValue = "";
  if(document.defaultView && document.defaultView.getComputedStyle){
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  }
  else if(oElm.currentStyle){
    strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}
