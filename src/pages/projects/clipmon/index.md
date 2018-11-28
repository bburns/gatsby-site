---
title: "Clipmon: a clipboard monitor for Emacs"
description: ''
date: '2016-01-05'
link: clipmon-a-clipboard-monitor-for-emacs
image: ''
---


Clipmon [1] monitors the system clipboard and adds items to Emacs's kill-ring, and
can optionally paste the text into Emacs - I use it mostly to take notes from
the web.

There's a bug with X-window systems though [2] - when you open a gui dialog, e.g.
Shift+Click to open the `menu-set-font` dialog, Emacs hangs, and C-g won't stop
it.

So, don't do that! I've been trying to track down this bug so I can fix it somehow -
Clipmon works by checking the clipboard every n seconds, but on X-windows checking the
clipboard also involves a timer, and somehow the two don't work together. The internals
are a bit hairy, but I've been wanting to get more into the internals of Emacs so this is
as good a place as any to start.

The simplest solution would be to just not check the clipboard if an X-window
dialog is showing, but so far I don't think that information is available to the
user. Adding that would be a possibility, and would probably be safer than
messing with the timer code.

[1] https://github.com/bburns/clipmon
[2] http://debbugs.gnu.org/cgi/bugreport.cgi?bug=22214
