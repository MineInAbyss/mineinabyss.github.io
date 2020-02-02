---
layout: post
title:  "Build zones"
date:   2019-08-14
tags: build tutorial
author: Offz
color: rgb(255,90,90)
cover: '../assets/images/build_zones.png'
subtitle: 'A guide on creating them'
---
Hello everyone! We're planning to revamp the current building system soon. The following will be a guideline document for our Senior Builders/Staff, describing the basics of WorldGuard and how to use it to let non-builders build safely.

### Non-staff

If you simply want to build, you may ask Sr Builders and up to make you a region, the rest of the page isn't important to you.

### How you let a non builder build:

1. Select an area with a WorldEdit wand. Then,
2. `/rg claim|define  <region name>`. This creates a region. When using `claim` it will attempt to make you the owner, however under certain circumstances it will fail. In that case use `define` or `create` instead, which will make the region but not add you as an owner. 
3. `/rg setparent <region name> buildzone`. This sets the `buildzone` region as the parent of the current region. `buildzone` has settings predefined and they get copied to your new region.
4. `/rg addmember <region name> [people to be added]`. This adds a member to your region. You can add more members to the region afterwards with the same command.

### Some notes:

Try to keep small region names to PlayernameSomething so if I was a tester and wanted to build a house, you could name it `OffzHouse`

`/rg info <name>` shows you a menu for that region. You can click around in that too to edit stuff

Try to keep regions small for new builders, but eventually we'll create larger areas for slums, caves, central orth, etc etc...

You can also use `/wggui` to see regions, though this is more of an administrative tool. Since claiming a region sets you as the owner and the GUI has an option to show only regions you are an owner of, it's useful for removing ones you created for people after they're done.
