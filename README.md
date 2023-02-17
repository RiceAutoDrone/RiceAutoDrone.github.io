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
## Set Access Point for ssh connection
https://www.raspberrypi.com/documentation/computers/configuration.html#setting-up-a-routed-wireless-access-point

This is for connecting pi by fixed ssh.
### Set SSH config 
When prompted, select yes.

Type:
```
sudo raspi-config
```
in the utility, "Interfacing Options -> SSH":
### Install AP and Management Software
In order to work as an access point, the Raspberry Pi needs to have the hostapd access point software package installed:
```
sudo apt install hostapd
```
Enable the wireless access point service and set it to start when your Raspberry Pi boots:
```
sudo systemctl unmask hostapd
sudo systemctl enable hostapd
```
In order to provide network management services (DNS, DHCP) to wireless clients, the Raspberry Pi needs to have the dnsmasq software package installed:
```
sudo apt install dnsmasq
```
Finally, install netfilter-persistent and its plugin iptables-persistent. This utility helps by saving firewall rules and restoring them when the Raspberry Pi boots:
```
sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptables-persistent
```
Software installation is complete. We will configure the software packages later on.
### Set up the Network Router
The Raspberry Pi will run and manage a standalone wireless network. It will also route between the wireless and Ethernet networks, providing internet access to wireless clients. If you prefer, you can choose to skip the routing by skipping the section "Enable routing and IP masquerading" below, and run the wireless network in complete isolation.

Define the Wireless Interface IP Configuration
The Raspberry Pi runs a DHCP server for the wireless network; this requires static IP configuration for the wireless interface (wlan0) in the Raspberry Pi. The Raspberry Pi also acts as the router on the wireless network, and as is customary, we will give it the first IP address in the network: 192.168.4.1.

To configure the static IP address, edit the configuration file for dhcpcd with:
```
sudo nano /etc/dhcpcd.conf
```
Go to the end of the file and add the following:
```
interface wlan0
    static ip_address=192.168.4.1/24
    nohook wpa_supplicant
```
Enable Routing and IP Masquerading
This section configures the Raspberry Pi to let wireless clients access computers on the main (Ethernet) network, and from there the internet.

NOTE
If you wish to block wireless clients from accessing the Ethernet network and the internet, skip this section.
To enable routing, i.e. to allow traffic to flow from one network to the other in the Raspberry Pi, create a file using the following command, with the contents below:
```
sudo nano /etc/sysctl.d/routed-ap.conf
```
File contents:
```
# Enable IPv4 routing
net.ipv4.ip_forward=1
```
Enabling routing will allow hosts from network 192.168.4.0/24 to reach the LAN and the main router towards the internet. In order to allow traffic between clients on this foreign wireless network and the internet without changing the configuration of the main router, the Raspberry Pi can substitute the IP address of wireless clients with its own IP address on the LAN using a "masquerade" firewall rule.

The main router will see all outgoing traffic from wireless clients as coming from the Raspberry Pi, allowing communication with the internet.

The Raspberry Pi will receive all incoming traffic, substitute the IP addresses back, and forward traffic to the original wireless client.

This process is configured by adding a single firewall rule in the Raspberry Pi:
```
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```
Now save the current firewall rules for IPv4 (including the rule above) and IPv6 to be loaded at boot by the netfilter-persistent service:
```
sudo netfilter-persistent save
```
Filtering rules are saved to the directory /etc/iptables/. If in the future you change the configuration of your firewall, make sure to save the configuration before rebooting.

Configure the DHCP and DNS services for the wireless network
The DHCP and DNS services are provided by dnsmasq. The default configuration file serves as a template for all possible configuration options, whereas we only need a few. It is easier to start from an empty file.

Rename the default configuration file and edit a new one:
```
sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
sudo nano /etc/dnsmasq.conf
```
Add the following to the file and save it:
```
interface=wlan0 # Listening interface
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
                # Pool of IP addresses served via DHCP
domain=wlan     # Local wireless DNS domain
address=/gw.wlan/192.168.4.1
                # Alias for this router
```
The Raspberry Pi will deliver IP addresses between 192.168.4.2 and 192.168.4.20, with a lease time of 24 hours, to wireless DHCP clients. You should be able to reach the Raspberry Pi under the name gw.wlan from wireless clients.

NOTE
There are three IP address blocks set aside for private networks. There is a Class A block from 10.0.0.0 to 10.255.255.255, a Class B block from 172.16.0.0 to 172.31.255.255, and probably the most frequently used, a Class C block from 192.168.0.0 to 192.168.255.255.
There are many more options for dnsmasq; see the default configuration file (/etc/dnsmasq.conf) or the online documentation for details.

### Ensure Wireless Operation
Countries around the world regulate the use of telecommunication radio frequency bands to ensure interference-free operation. The Linux OS helps users comply with these rules by allowing applications to be configured with a two-letter "WiFi country code", e.g. US for a computer used in the United States.

In the Raspberry Pi OS, 5 GHz wireless networking is disabled until a WiFi country code has been configured by the user, usually as part of the initial installation process (see wireless configuration pages in this section for details.)

To ensure WiFi radio is not blocked on your Raspberry Pi, execute the following command:
```
sudo rfkill unblock wlan
```
This setting will be automatically restored at boot time. We will define an appropriate country code in the access point software configuration, next.
### Configure the AP Software
Create the hostapd configuration file, located at /etc/hostapd/hostapd.conf, to add the various parameters for your new wireless network.
```
sudo nano /etc/hostapd/hostapd.conf
```
Add the information below to the configuration file. This configuration assumes we are using channel 7, with a network name of NameOfNetwork, and a password AardvarkBadgerHedgehog. Note that the name and password should not have quotes around them. The passphrase should be between 8 and 64 characters in length.
```
country_code=GB
interface=wlan0
ssid=NameOfNetwork
hw_mode=g
channel=7
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=AardvarkBadgerHedgehog
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```
Note the line country_code=GB: it configures the computer to use the correct wireless frequencies in the United Kingdom. Adapt this line and specify the two-letter ISO code of your country. See Wikipedia for a list of two-letter ISO 3166-1 country codes.

To use the 5 GHz band, you can change the operations mode from hw_mode=g to hw_mode=a. Possible values for hw_mode are:

a = IEEE 802.11a (5 GHz) (Raspberry Pi 3B+ onwards)

b = IEEE 802.11b (2.4 GHz)

g = IEEE 802.11g (2.4 GHz)

Note that when changing the hw_mode, you may need to also change the channel - see Wikipedia for a list of allowed combinations.
### Running the new Wireless AP
Now restart your Raspberry Pi and verify that the wireless access point becomes automatically available.
```
sudo systemctl reboot
```
Once your Raspberry Pi has restarted, search for wireless networks with your wireless client. The network SSID you specified in file /etc/hostapd/hostapd.conf should now be present, and it should be accessible with the specified password.

If SSH is enabled on the Raspberry Pi, it should be possible to connect to it from your wireless client as follows, assuming the pi account is present: ssh pi@192.168.4.1 or ssh pi@gw.wlan

If your wireless client has access to your Raspberry Pi (and the internet, if you set up routing), congratulations on setting up your new access point!

If you encounter difficulties, contact the forums for assistance. Please refer to this page in your message.

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
sudo pip3 install PyYAML mavproxy --user
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

## DroneKit
https://dronekit-python.readthedocs.io/en/latest/guide/quick_start.html

```
sudo apt-get install python-is-python2
sudo apt-get install python-is-python3
sudo pip install dronekit dronekit-sitl
sudo pip3 install pyception
```
```
python auto.py --connect /dev/ttyAMA0
```
