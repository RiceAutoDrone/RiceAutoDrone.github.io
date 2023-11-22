# Setting up the flight controller
[Reference](https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html)

Connect to the flight controller with a ground station (i.e. Mission Planner) and set the following parameters:

1. To enable MAVLink 2 on the serial port, set

    ``` 
    SERIAL2_PROTOCOL = 2 (the default)
    ```

2.  To communicate with the RPi at 921600 baud, set

    ```
    SERIAL2_BAUD = 921
    ```

3.  Finally, if you are using APSync to stream the dataflash log files to the RPi, set

    ```
    LOG_BACKEND_TYPE = 3
    ```
    