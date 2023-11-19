## Getting start with 6-Aixs RC Drone:
We are currently using [QWinOut Q705 6-Aixs RC Drone](https://www.amazon.com/QWinOut-Helicopter-Remote-Control-Aircraft/dp/B08L6J7VPT?ref_=ast_sto_dp&th=1) from previous team's drone for this project, and using [Cube Black](https://docs.px4.io/v1.11/en/flight_controller/pixhawk-2.html) flight controller for the drone.

### QWinOut Q705 6-Aixs RC Drone:

<img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Xl5pkLIJL._AC_SX679_.jpg" width="300" height="300" />


### Cube Black Flight Controller:

<img src="https://docs.px4.io/v1.11/assets/flight_controller/cube/pixhawk2_cube_hero.png" width="300" height="200" />

## Getting start with 4-Aixs RC Drone:
We will using [QWinOut J630 4-Aixs RC Drone](https://www.amazon.com/dp/B082PN8C98?ref_=cm_sw_r_cp_ud_dp_FE0D8ZMAWQRE5JXRX8X8) for this project, but it's currently not working (Power distribution circuit board burned out), and the flight controller is based on [APM2.8](https://ardupilot.org/copter/docs/common-apm25-and-26-overview.html). 

### QWinOut J630 4-Aixs RC Drone Kit:

<img src="https://m.media-amazon.com/images/I/61ZRX0IbxFL._AC_SL1000_.jpg" width="300" height="300" />

### APM2.8 Flight Controller:

<img src="https://i.ebayimg.com/images/g/-5EAAOSwpOxhHMsS/s-l500.jpg" width="300" height="200" />

Download [Mission Planner](https://ardupilot.org/planner/docs/mission-planner-installation.html) to connect to your [APM2.8 Flight Controller](https://a.co/d/29JsbCW), [Cube Black Flight Controller](https://docs.px4.io/v1.11/en/flight_controller/pixhawk-2.html) or [Pixhawk PX4 Flight Controller](https://a.co/d/iWNnGU8), then we need to install [MAVProxy](https://pypi.org/project/MAVProxy/) and [DroneKit-Python](https://github.com/dronekit/dronekit-python/) on Jetson Nano, **MAVProxy** is a powerful command-line based “developer” ground station software, and **DroneKit-Python** allows you to simply control flight controller using the Python scripts.
