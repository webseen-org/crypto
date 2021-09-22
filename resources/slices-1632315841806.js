(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);