# RiceAutoDrone.github.io
Information of the project

# Initial
https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html

## Setting up the flight controller¶
Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

SERIAL2_PROTOCOL = 2 (the default) to enable MAVLink 2 on the serial port.

SERIAL2_BAUD = 921 so the flight controller can communicate with the RPi at 921600 baud.

LOG_BACKEND_TYPE = 3 if you are using APSync to stream the dataflash log files to the RPi

# Configure the serial port (UART)¶
If not already configured, the Raspberry Pi’s serial port (UART) will need to be enabled. Use the Raspberry Pi configuration utility for this.

Type:

sudo raspi-config
And in the utility, select “Interfacing Options”:

../_images/RaspberryPi_Serial1.png
RasPiConfiguration Utility¶

And then “Serial”:

../_images/RaspberryPi_Serial2.png
When prompted, select no to “Would you like a login shell to be accessible over serial?”.

When prompted, select yes to “Would you like the serial port hardware to be enabled?”.

Reboot the Raspberry Pi when you are done.

The Raspberry Pi’s serial port will now be usable on /dev/serial0.

# Setup the RPi Software
