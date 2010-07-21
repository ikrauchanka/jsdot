/*
This file is part of the JSDot library 
 
http://code.google.com/p/jsdot/

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

/**
	@fileOverview This file exists only for documentation purposes!
	It doesn't contain any application code.
*/

/**
	@class Handler for JSDot events.
	<br>This class exists only for documentation purposes!
	It doesn't contain any application code.<br>

	Describes the events generated by JSDot and their arguments.<br>

	To register an handler use {@link jsdot_Impl#addEventHandler}
	and to remove it use {@link jsdot_Impl#removeEventHandler}.
*/
doc_Handler = function() {};

/** Selection changed.
	Fired by {@link jsdot_Selection} when the selection changed.<br>

	Use 'what.selected' on the argument to know whether it has been
	selected or deselected.<br>
	Use {@link jsdot_Selection#selection} to get an array of selected
	elements.
	
	@param {Object} what Element (node/edge) whose selected status has changed.
*/
doc_Handler.selectionchg = function(what) {};

/** Click event.
	Fired by {@link jsdot_Selection}.<br>
	This event is fired only when selection is disabled, otherwise {@link selectionchg}
	or a dragging event is fired.<br>

	Selection is disabled when both {@link jsdot_Selection#allowEdges}
	and {@link jsdot_Selection#allowNodes} are false.
	
	@param {Object} what Node or Edge which has been clicked, null for background.
	@param {Event} evt original mouse event that triggered the click.
*/
doc_Handler.click = function(what, evt) {};

/** Element picked.
	Generated when starting a drag&drop.
	@param {Object} what element being dragged
*/
doc_Handler.pick = function(what) {};

/** Element dragged.
	Generated when dragging, each time the browser generates a 'mousemove' event.
	@param {Object} what element being dragged
	@param {Event} evt browser event with added dx and dy (distance from pick)
*/
doc_Handler.drag = function(what, evt) {};

/** Element dropped.
	Generated when a drag&drop ends.
	@param {Object} what element being dragged
	@param {Event} evt browser event with added dx and dy (distance from pick)
*/
doc_Handler.drop = function(what, evt) {};
