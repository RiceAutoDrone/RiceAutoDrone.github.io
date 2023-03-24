---
layout: indexcategory
title: 'Installation'
subtitle: Read the documentation
permalink: /installation
include_collection: installation
header_type: "hero"
header_img: "https://images.unsplash.com/photo-1545290614-5ceedf604139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
og_image: /assets/img/site/banner-docs.png
index_sort_asc: true
index_items: 20
---

<span class="chulapa">Chulapa</span> Jekyll Theme has an extensive documentation.

# Flight Controller
## Setting up the flight controller¶
https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html

Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

```SERIAL2_PROTOCOL = 2 (the default)``` to enable MAVLink 2 on the serial port.

```SERIAL2_BAUD = 921``` so the flight controller can communicate with the RPi at 921600 baud.

```LOG_BACKEND_TYPE = 3``` if you are using APSync to stream the dataflash log files to the RPi
