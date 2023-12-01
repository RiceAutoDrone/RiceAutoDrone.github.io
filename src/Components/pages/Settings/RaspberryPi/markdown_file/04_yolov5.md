---
title: 04 Yolov5
subtitle: Setup for yolov5
excerpt: Yolov5 Settings
date: "2023-02-14"
---

## Reference
[https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5)

## Download from Github repo
```
git clone https://github.com/ultralytics/yolov5  # clone
```

## Before installing requirements.txt
Since the requirements are up to date, rpi actually has version conflict with torch. We have to fix it before instaiing.
Here is a [compatible chart](https://github.com/pytorch/pytorch/wiki/PyTorch-Versions) for torch.

|  PyTorch Version  |  torchvision  |  torchtext  |  torchaudio  |  Release Date  |
|:-----------------:|:-------------:|:-----------:|:------------:|:--------------:|
|       2.0.0       |     0.15.1    |    0.15.1   |     2.0.1    |   03/15/2023   |
|      1.13.0       |     0.14.0    |    0.14.0   |    0.13.0    |   10/28/2022   |
|      1.12.0       |     0.13.0    |    0.13.0   |    0.12.0    |   06/28/2022   |
|      1.11.0       |     0.12.0    |    0.12.0   |    0.11.0    |   02/10/2022   |
|      1.10.1       |     0.11.2    |    0.11.1   |    0.10.1    |   12/15/2021   |

```
cd yolov5
sudo nano requirements.txt
```

Change the torch version and torchvision version to the following version
```
torch==1.12.0
torchvision==0.13.0
```

After that ctrl+X, ctrl+Y to save it.

Now, enter the command
```
pip install -r requirements.txt  # install
```

## Install and Enjoy!!!!
When you are done, you can use this command to do object detection.

```
python detect.py --weights yolov5s.pt --source 0
```

## Checkpoint
- [Image](https://rice.box.com/s/2nue74tb1cp89zjnk5b1p9djniv71i6p)