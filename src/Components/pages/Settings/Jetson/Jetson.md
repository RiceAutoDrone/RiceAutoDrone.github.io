## Getting start with Jetson Nano 2GB Developer Kit:

To begin with Jetson Nano 2GB, go to [this link](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) write image to the microSD card (Before write image to your SD card, make sure your [JetPack version](https://developer.nvidia.com/embedded/jetpack-archive), notice that **Jetson Nano only supports up to JetPack 4.6.3**)

After inserting the microSD card, you can connect the power supply, which will automatically boot up the system.

When you boot the system for the first time, you'll be taken through some initial setup, including:

- Review and accept NVIDIA Jetson software EULA
- Select system language, keyboard layout, and time zone
- Create username, password, and computer name
- Log in

After the initial setup, you should see the following screen:

<img src="https://gilberttanner.com/content/images/2020/08/initial_screen.png" width="500" height="300" />

After successfully logging into the desktop, we recommend completing the following steps for later use:

### 1. Increasing swap memory:

```
git clone https://github.com/JetsonHacksNano/resizeSwapMemory
cd resizeSwapMemory
 ./setSwapMemorySize.sh -g 4
```

After executing the above command, you'll have to **reboot** the Jetson Nano for the changes to take effect.

### 2. Installing prerequisites and configuring your Python environment:

Now that the Jetson Nano is ready to go, we will create a deep learning environment. We will start by installing all prerequisites and configuring a Python environment, and how to code remote using VSCode Remote SSH.

```
sudo apt-get update
sudo apt-get upgrade

sudo apt-get install git cmake python3-dev nano

sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev
```

### 3. Configuring your Python environment:

Next, we will configure our Python environment. This includes downloading pip3 and virtualenv.

```
sudo apt-get install python3-pip
sudo pip3 install -U pip testresources setuptools
sudo pip install virtualenv virtualenvwrapper
```

To get virtualenv to work, we need to add the following lines to the **~/.bashrc** file:

```
# virtualenv and virtualenvwrapper
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```

To activate the changes, the following command must be executed:

```
source ~/.bashrc
```

Now we can create a virtual environment using the **mkvirtualenv** command.

```
mkvirtualenv ml -p python3
workon ml
```

### 4. Coding remote with Visual Studio Code:

If you are like me and hate writing long scripts in nano or vim, the VSCode remote development plugin is for you. It allows you to develop remotely inside VSCode by establishing an SSH remote connection.
To use VSCode remote development, you'll first have to install the remote development plugin. After that, you need to create an SSH-Key on your local machine and then copy it over to the Jetson Nano.

```
# Create Key
ssh-keygen -t rsa
# Copy key to jetson nano
cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys'
```

Now you only need to add the SSH Host. Ctrl + Shift + P -> Remote SSH: Connect to Host.

<img src="https://gilberttanner.com/content/images/2020/03/grafik-5.png" width="300" height="100" />

<img src="https://gilberttanner.com/content/images/2020/08/vscode_remote_control.PNG" width="500" height="300" />

### 5. Install jetson-stats:

**jetson-stats** is a package for **monitoring** and **control** your [NVIDIA Jetson](https://developer.nvidia.com/buy-jetson) [Orin, Xavier, Nano, TX] series.

jetson-stats is a powerful tool to analyze your board, you can use with a stand alone application with `jtop` or import in your python script, the main features are:

- Decode hardware, architecture, L4T and NVIDIA Jetpack
- Monitoring, CPU, GPU, Memory, Engines, fan
- Control NVP model, fan speed, jetson_clocks
- Importable in a python script
- Dockerizable in a container
- Do not need super user
- Tested on many different hardware configurations
- Works with all NVIDIA Jetpack

```
sudo pip3 install -U jetson-stats
```

_Don't forget to **logout/login** or **reboot** your board_

Start jtop it's pretty simple just write `jtop`!

```
jtop
```

### 6. Install OpenCV:
Installing OpenCV on the Jetson Nano can be a bit more complicated, but frankly, [JetsonHacks.com](https://jetsonhacks.com/) has a great guide, or see the tutorial from [Q-engineering](https://qengineering.eu/install-opencv-4.5-on-jetson-nano.html).

### 7. Install PyTorch:

Since JetPack 4.6 has Python 3.6, you cannot install PyTorch 1.11.0 on a Jetson Nano.

Install **torch-1.9.0**:
```
# install the dependencies (if not already onboard)
sudo apt-get install python3-pip libjpeg-dev libopenblas-dev libopenmpi-dev libomp-dev
sudo -H pip3 install future
sudo pip3 install -U --user wheel mock pillow
sudo -H pip3 install testresources

# above 58.3.0 you get version issues
sudo -H pip3 install setuptools==58.3.0
sudo -H pip3 install Cython

# install gdown to download from Google drive
sudo -H pip3 install gdown

# download the wheel
gdown https://drive.google.com/uc?id=1wzIDZEJ9oo62_H2oL7fYTp5_-NffCXzt

# install PyTorch 1.9.0
sudo -H pip3 install torch-1.9.0a0+gitd69c22d-cp36-cp36m-linux_aarch64.whl

# clean up
rm torch-1.9.0a0+gitd69c22d-cp36-cp36m-linux_aarch64.whl
```

Install **torchvision-0.10.0**:
```
# Used with PyTorch 1.9.0
# the dependencies
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev

# download TorchVision 0.10.0
gdown https://drive.google.com/uc?id=1Q2NKBs2mqkk5puFmOX_pF40yp7t-eZ32

# install TorchVision 0.10.0
sudo -H pip3 install torchvision-0.10.0a0+300a8a4-cp36-cp36m-linux_aarch64.whl

# clean up
rm torchvision-0.10.0a0+300a8a4-cp36-cp36m-linux_aarch64.whl
```