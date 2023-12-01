---
title: 05 Motion
subtitle: Setup for IP camera
excerpt: IP camera sttings
date: "2023-11-17"
---

## Reference
[https://pimylifeup.com/raspberry-pi-webcam-server/](https://pimylifeup.com/raspberry-pi-webcam-server/)
[https://www.instructables.com/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/](https://www.instructables.com/How-to-Make-Raspberry-Pi-Webcam-Server-and-Stream-/)

## Installing
1. We will be using the terminal, so open the terminal on the Pi or connect to it via SSH.
2. To begin, first, update the Raspberry Pi, so you’re running on the latest version.
```
sudo apt update
sudo apt upgrade
```

3. First, install the following packages.
```
sudo apt install autoconf automake build-essential pkgconf libtool git libzip-dev libjpeg-dev gettext libmicrohttpd-dev libavformat-dev libavcodec-dev libavutil-dev libswscale-dev libavdevice-dev default-libmysqlclient-dev libpq-dev libsqlite3-dev libwebp-dev
```

4. Next, download the Motion deb file for Raspbian Buster from GitHub using the wget command and install it using the dpkg command.
```
sudo wget https://github.com/Motion-Project/motion/releases/download/release-4.5.1/$(lsb_release -cs)_motion_4.5.1-1_$(dpkg --print-architecture).deb
sudo dpkg -i $(lsb_release -cs)_motion_4.5.1-1_$(dpkg --print-architecture).deb
```

That’s all you need to do before moving on to configuring Motion so that it will run on your Pi.

## Configuring Motion
1. Now we need to make some edits to the configuration file, motion.conf.
```
sudo nano /etc/motion/motion.conf
```

2. Find the following lines and ensure that they are set to the following values.
```
daemon on
width 640
height 480
framerate 100
post_capture 5
picture_output off
movie_output off
webcontrol_localhost off
stream_port 8081
stream_localhost off
```
ctrl+X, ctrl+Y to save it

After that, enter
```

```

3. First of all your have to restart the motion software. To do it type in the command 
```
sudo service motion restart
```
Thrn start motion with 
```
sudo motion
```

3. Open your browser and enter 
```
192.168.4.1:8080
```
Click on the `Change Configuration` under Action and click on select option. You'll see that there is no option to select and that is fine. Now click on the `Write Configuration` under Action.

4. Then go back to motion.conf. There are going to be more parameters that can be set.
```
Stream_quality 100
stream_maxrate 100
```

6. Now, we need to enable the Motion service by running the command below.
Using this command should make Motion start up when your Raspberry Pi powers on.
```
sudo systemctl enable motion
```

7. Next, restart motion and your server is ready.
```
sudo service motion restart
sudo motion
```

8. Reboot if the stream is lagging.
```
sudo reboot
```

## 
To use this with yolov5, enter this.
```
python detect.py --weights yolov5s.pt --source 'http://192.168.4.1:8081/0/stream'  
``` 

## Checkpoint
- [Image](https://rice.box.com/s/n6n4fh7v391f6pif44mt7hv17pc2dcc7)