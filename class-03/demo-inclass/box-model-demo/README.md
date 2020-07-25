# Class-03 Box Model Demo

## Overview

This app is to demonstrate the box model when it comes to working with HTML elements and CSS, and what is considered part of box dimensions when creating them.

## Summary

The provided files are your index.html and style.css.  When run on live-server, notice all of the boxes are aligned in a nice 3x3 grid.  This is not default behavior.  To see default behavior, comment out lines 1-3 in the styles.css file.  Once that occurs and you see the new page, notice how now the <div> containers are now in a 2x5 pattern.

This is because the <div>'s are actually larger!  Even though in my style.css I am giving my <div> containers a specific 300x300 height and width, go in the devtools in Chrome and inspect a <div>.  It is not 300x300, but 304x304.  This is because the border taken into account the final dimensions for the <div> increasing the dimensions from 300x300 to 304x304.

To fix this behavior or normalize it, we use the "box-sizing" CSS attribute, with a value of "border-box".  This ensures that all of the box attributes that aren't normally accounted for like the border are there, making sure the final <div> container is actually what we declared it to be in the styles.css file, which is 300x300.
