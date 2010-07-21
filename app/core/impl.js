/*
This file is part of the JSDot library 
 
http://code.google.com/p/jsdot/

Copyright (c) 2009 Lucia Blondel, Nicos Giuliani, Carlo Vanini
Copyright (c) 2010 Carlo Vanini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

/** Construct a JSDot instance.
	@class JSDot implementation
	Handles events dispatching.

	@constructor
*/
function jsdot_Impl() {

}

jsdot_Impl.prototype = {

	view: null,
	
	selection: null,
	
	/** Registered event handlers.
		@private
		@see addEventHandler
		@see fireEvent
	*/
	handlers: {},
	
	/** Registers an event handler.
		When an event is triggered the function
		handler['event name'] will be called.
		
		The name of the handler is NOT the name of the event!
		A single handler may define functions for more events.
		@param {String} name name of the event handler
		@param {Handler} handler object with handler functions
	*/
	addEventHandler: function(name, handler) {
		this.handlers[name] = handler;
	},
	
	/** Removes an event handler.
		@param {String} name name of the event hadler to remove
	*/
	removeEventHandler: function(name) {
		if (this.handlers[name]) delete this.handlers[name]
	},

	/** Triggers an event.
		Calls all registered event handlers for event 'name'.
		@param {String} name name of the events
		@param {Object} arguments any following arguments will be passed on to the handler
	*/
	fireEvent: function() {
		var name = Array.prototype.shift.apply(arguments); // remove name
		for (var e in this.handlers) {
			var h = this.handlers[e];
			if (h[name]) h[name].apply(h, arguments);
		};
	},
}
