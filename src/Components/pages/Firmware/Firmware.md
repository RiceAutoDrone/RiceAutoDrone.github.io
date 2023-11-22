This section contains Python scripts to control a drone using DroneKit and pymavlink libraries.

## Prerequisites

- A drone compatible with DroneKit and pymavlink libraries
- A flight controller connected to an embedded device
- Python 3.x installed on the device
- DroneKit and pymavlink libraries installed on the device

## Usage

### Hover test

To test hovering in the air, run ```sudo python3 Drone Control/Hover_test2_successfully.py``` in a terminal window. This script will let the drone hover in the air about 1 foot for 1 second, then safely land on the ground.

Before running the script, make sure the flight controller is connected to the embedded device and check the port name. Modify the 6th line ```vehicle = connect('/dev/ttyACM0',wait_ready=True, baud=57600)``` accordingly, where ```/dev/ttyACM0``` is your port name.

To interrupt the script and shutdown the drone, use ```ctrl + c```.

### Movement test

To test movement, run ```sudo python3 Drone Control/Movement_test3_successfully.py``` in a terminal window. This script will let the drone hover in the air about 2 feet for 1 second, move forward with 1 ms about 1 foot, hover in the air about 1 second, and finally safely land on the ground.

Before running the script, check the connection and modify the port name if necessary.

To interrupt the script and shutdown the drone, use ```ctrl + c```.

### Rotation test

To test rotation, run ```sudo python3 Drone Control/Rotation_test2_successfully.py``` in a terminal window. This script will let the drone hover in the air about 1 foot for 1 second, rotate clockwise about 90 degrees, hover in the air about 1 second, and finally safely land on the ground.

Before running the script, check the connection and modify the port name if necessary.

To interrupt the script and shutdown the drone, use ```ctrl + c```.