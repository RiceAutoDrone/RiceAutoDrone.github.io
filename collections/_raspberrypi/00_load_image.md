---
layout: default
title: 00 Load Image
subtitle: Settings to prevent space error
permalink: /settings/raspberrypi/load_image.html
excerpt: Access Point Settings
header_type: "hero"
header_img: assets/img/drone.jpg
show_toc: true
---

## Reference
[https://arstechnica.com/civis/threads/copy-an-8g-pi-card-to-32g-card.1431855/](https://arstechnica.com/civis/threads/copy-an-8g-pi-card-to-32g-card.1431855/)

### Important
To load image onto a SD card bigger then 8G, please do the following configuration.

```
# To check memory space match the SD card storage space.
df -h
```

If not, got to configuration
```
sudo raspi-config
```

"Advanced Option" -> "Expand filesystem" -> "Yes"

This will prevent errors such as 

**Could not install packages due to an EnvironmentError: [Errno 28] No space left on device**

ERROR: Command errored out with exit status 1: 
sudo apt-get install python3-scipy

ERROR: Could not find a version that satisfies the requirement torch>=1.7.0
ERROR: No matching distribution found for torch>=1.7.0
pip install torch==1.7.0 -f https://download.pytorch.org/whl/torch_stable.html