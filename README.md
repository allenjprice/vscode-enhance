# Enhance!

**tl;dr** - quickly zoom in on editor's text _without_ zooming in everything else

## The Problem
When it comes to editor settings, everybody has their own unique preferences. This is great. Most text editors allow you to customize them to match your own preferences. This is also great!

One of _my_ personal preferences involves keeping my font size small. I can't explain why - it's just how I like things! When I'm presenting to a group, teaching a class, or pairing with a coworker, however, my preference gets in the way - other folks may not be able to clearly read the code on-screen. `CMD =` doesn't really suit my needs because it enlarges EVERYTHING - the sidebar, the tab bar, etc. I just want to zoom in on the text!

## A Solution
VS Code provides some built-in commands, "Editor Font Zoom [In, Out, Reset]" that do exactly what I want - these commands alter the size of the text in your editor without enlarging anything else.

This extension creates a few convenience commands that leverage the built-in Editor Font Zoom commands under-the-hood.

## Features

### Command: `ENHANCE!`

This command increases your Editor Font Zoom level by three stages.

### Command: `OMEGA ENHANCE`

This command increases your Editor Font Zoom level by five stages.

### Command: `Unenhance`

This command resets your Editor Font Zoom level to 0 (returning your text to its default size).

## FAQ
> Note: nobody has actually asked these questions yet, but here's a few I can think of that people might ask!
* I peeked at `extension.js` and it looks like you literally just call `editor.action.fontZoomIn` a bunch. _Really?_
  * Really!
* I like using Editor Font Zoom but don't want to install a whole extension for this. What else can I do?
  * No problem! Here's a [blog post](https://www.larryhudson.io/blog/2020/02/editor-font-zoom-vs-code/) that explains how to make the `COMMAND =` and `COMMAND -` shortcuts use Editor Font Zoom instead of their default behavior. 