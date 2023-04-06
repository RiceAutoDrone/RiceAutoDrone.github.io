---
layout: default
title: Deep Learning (YOLOv5 + MiDaS)
subtitle: Settings
permalink: detection/
header_type: "hero"
header_img: assets/img/drone.jpg
show_toc: true
---

This section will implemented using PyTorch and uses YOLOv5 and MiDaS models for object detection and depth estimation respectively.

## Requirements

- Python 3.x
- PyTorch
- OpenCV

## Installation

- Clone this repository: ```git clone https://github.com/ultralytics/yolov5```
- Install the required packages: ```pip install -r requirements.txt  # install```

## Usage

- Connect your USB camera to the computer
- Determine the camera port number and modify it in the 11th line of the code, if necessary: cam_port = 0
- Run the script in the terminal: 

```
python Identification/object_detection+depth_estimation.py
```

- The script will open the camera and start detecting objects and estimating their depths in real-time.

## Result

<img src="{{ site.baseurl }}/assets/img/YOLOv5_test.gif" width="500" height="300" />
<!-- ![](https://github.com/Rice-MECE-Capstone-Projects/Autodrone/blob/main/Photos/YOLOv5_test.gif) -->

## Keybindings

Press 'c' to exit the script and close the camera window