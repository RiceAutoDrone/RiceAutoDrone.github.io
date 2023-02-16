# RiceAutoDrone.github.io
Information of the project

# Flight Controller
## Setting up the flight controller¶
https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html

Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

```SERIAL2_PROTOCOL = 2 (the default)``` to enable MAVLink 2 on the serial port.

```SERIAL2_BAUD = 921``` so the flight controller can communicate with the RPi at 921600 baud.

```LOG_BACKEND_TYPE = 3``` if you are using APSync to stream the dataflash log files to the RPi

# Respberru Pi
## Set Static IP
https://www.makeuseof.com/raspberry-pi-set-static-ip/

This is for connecting pi by fixed ssh.

When prompted, select yes.

Type:
```
sudo raspi-config
```
in the utility, "Interfacing Options -> SSH":

Check current IP with

```
hostname -I
```

Then check router’s gateway IP address wuth
```
ip r | grep default
sudo nano /etc/resolv.conf
```

Use this command to open the config file
```
sudo nano /etc/dhcpcd.conf
```

Add these line at the end.
```
interface wlan0
static ip_address=192.168.1.120/24
static routers=192.168.1.254
static domain_name_servers=192.168.1.254
```

## Configure the serial port (UART)
If not already configured, the Raspberry Pi’s serial port (UART) will need to be enabled. Use the Raspberry Pi configuration utility for this.

Type:
```
sudo raspi-config
```
And in the utility, "Interfacing Options -> Serial":

When prompted, select no to "Would you like a login shell to be accessible over serial?".

When prompted, select yes to "Would you like the serial port hardware to be enabled?".

Reboot the Raspberry Pi when you are done.

The Raspberry Pi’s serial port will now be usable on /dev/ttyAMA0.


## Setup the RPi Software (MAVProxy)
MAVProxy can be used to send commands to the flight controller from the Pi. It can also be used to route telemetry to other network endpoints.

This assumes you have a SSH connection to the Pi. If not, see see the the RPi Documentation.
See the MAVProxy Documentation for install instructions

### Install
https://www.youtube.com/watch?v=nIuoCYauW3s

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
sudo pip2 install PyYAML mavproxy --user
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
sudo reboot
```

To test the RPi and flight controller are able to communicate with each other first ensure the RPi and flight controller are powered, then in a console on the RPi type:
```
sudo mavproxy.py --master=/dev/ttyAMA0 --aircraft MyCopter //--console
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

## DroneKit
https://dronekit-python.readthedocs.io/en/latest/guide/quick_start.html

```
sudo pip install dronekit dronekit-sitl
```
