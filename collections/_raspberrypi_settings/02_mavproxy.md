---
title: MavProxy Settings
subtitle: Learn how to set up mavproxy
show_toc: true
h_min: 2
h_max: 5
---

## Reference
[https://www.youtube.com/watch?v=nIuoCYauW3s](https://www.youtube.com/watch?v=nIuoCYauW3s)

## Setup the RPi Software (MAVProxy)
MAVProxy can be used to send commands to the flight controller from the Pi. It can also be used to route telemetry to other network endpoints.

This assumes you have a SSH connection to the Pi. If not, see see the the RPi Documentation.
See the MAVProxy Documentation for install instructions

### Install

```
sudo nano /boot/config.txt
```

add 

```
enable_uart=1
dtoverlay=disable-bt
```

For Python 3 on Debian based systems (including Ubuntu, WSL, Raspian):
```
sudo apt-get update 
sudo apt-get install python3-dev python3-opencv python3-wxgtk4.0 python3-pip python3-matplotlib python3-lxml libxml2-dev libxslt-dev
pip3 install PyYAML mavproxy --user
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
sudo reboot
```

To test the RPi and flight controller are able to communicate with each other first ensure the RPi and flight controller are powered, then in a console on the RPi type:
```
mavproxy.py --master=/dev/ttyAMA0 --aircraft MyCopter //--console
```

Once MAVProxy has started you should be able to type in the following command to display the ARMING_CHECK parameters value
```
param show ARMING_CHECK
param set ARMING_CHECK 0
arm throttle
```

Note

If you get an error about not being able to find log files or if this example otherwise doesn’t run properly, make sure that you haven’t accidentally assigned these files to another username, such as Root.


To run MAVProxy as a telemetry router on the Pi, set it up to run as a service and use the –daemon and –non-interactive parameters. For example:
```
mavproxy.py --daemon --non-interactive --default-modules='' --continue --master=/dev/ttyAMA0 --out=udp:pro:14550
Note
```

If the Raspberry PI is heavily loaded, mavproxy.py might not provide a reliable connecton for telemetry routing. This is more likely on older/slower devices like the Raspberry PI Zero. If this happens, consider using mavlink-routerd. See this post on the ArduPilot forum for a detailed discussion: MavLink Routing with Router software.

## Checkpoint
- [Image]()