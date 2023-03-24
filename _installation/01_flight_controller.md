---
title: Installation
subtitle: How to setup Flight Controller
excerpt: Flight Controller Settings
show_toc: true
---

<span class="chulapa">Chulapa</span> was developed in and for Github.
There are three tested possible ways to use <span class="chulapa">Chulapa</span>:

# Flight Controller
## Setting up the flight controller¶
https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html

Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

```SERIAL2_PROTOCOL = 2 (the default)``` to enable MAVLink 2 on the serial port.

```SERIAL2_BAUD = 921``` so the flight controller can communicate with the RPi at 921600 baud.

```LOG_BACKEND_TYPE = 3``` if you are using APSync to stream the dataflash log files to the RPi
