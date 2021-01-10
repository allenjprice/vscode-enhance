# Enhance!

**tl;dr** - quickly zoom in on editor's text _without_ zooming in everything else

## The Problem
When it comes to editor settings, everybody has their own unique preferences - this is great! Most text editors allow you to customize them to match your own preferences - this is also great!

One of _my_ personal preferences involves keeping my font size small. I can't explain why - it's just how I like things! When I'm presenting to a group, teaching a class, or pairing with a coworker, however, my preference gets in the way - other folks may not be able to clearly read the code on-screen. `CMD =` doesn't really suit my needs because it enlarges EVERYTHING - the sidebar, the tab bar, etc. I just want to zoom in on the text!

## A Solution
VS Code provides some built-in commands, "Editor Font Zoom [In, Out, Reset]" that do exactly what I want - these commands alter the size of the text in your editor without enlarging anything else.

This extension creates a few convenience commands that leverage the built-in Editor Font Zoom commands under-the-hood.

## Features

### Commands: `ENHANCE!` and `OMEGA ENHANCE`

These commands increase your Editor Font Zoom by some number of levels, or 20% increments.

By default, `ENHANCE!` increases your Editor Font Zoom by three levels; `OMEGA ENHANCE` increases by 6 levels. You can customize these levels in the Settings UI or by setting the `enhance.enhanceLevel` and `enhance.omegaEnhanceLevel` keys in your `settings.json`.

### Command: `Unenhance`

This command resets your Editor Font Zoom level to 0 (returning your text to its default size). It's an alias for the built-in "Editor Font Reset" commmand.

## Another possibility

This extension solves a very specific problem according to my personal tastes. If you like the idea of using Editor Font Zoom but don't want to install an entire extension with silly command names, here's a [blog post](https://www.larryhudson.io/blog/2020/02/editor-font-zoom-vs-code/) that explains how to make the `COMMAND =` and `COMMAND -` shortcuts use Editor Font Zoom instead of their default behavior. 
