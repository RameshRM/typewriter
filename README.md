typewriter [![Build Status](https://travis-ci.org/RameshRM/typewriter.svg?branch=master)](https://travis-ci.org/RameshRM/typewriter)
===============

### Summary

```typewriter```, is a client-side javascript library enables to wireup keyboard eventing to DOM elements.  


===

### Features

* Simplicity 
 - To implement the features required to bubble up for Keyboard events.
 - Reduces the boiler plate coding for handling the keyboard eventing with keycodes
 - Simple api
 - Exposes KeyMap definition to provide key mapping set

==

### Installation

* <a download="typewriter.min.js" href="https://github.com/RameshRM/typewriter/blob/master/dist/typewriter.min.js">Get Minified & Gzipped </a>

* <a download="typewriter.js" href="https://github.com/RameshRM/typewriter/blob/master/dist/typewriter.js">Full library </a>

===

### Sample Usage  


##### The following example handles a `esc` key on a Text element with Id `Text`.


```javascript
   var $el = document.getElementById('Text') ;
    typewriter.on({keyMap : keyboard.keyMapDefs.Esc, state: 'up'},$el,function(kbEvent){
          alert('Escaped');
    });

```

##### The following example handles a `Down Arrow` key on a Text element with Id `Text`.


```javascript
    var $el = document.getElementById('Text') ;
    typewriter.on({keyMap : keyboard.keyMapDefs.Down, state: 'up'},$el,function(kbEvent){
          alert('Down Arrow Pressed');
    });
```
