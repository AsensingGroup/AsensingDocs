---
sidebar_position: 1
slug: /asensing-lidar-ros-sdk-user-guide
sidebar_label: LiDAR ROS SDK 使用指南
---

# Asensing_LiDAR_ROS SDK 使用指南

## 工程简介

本仓库是导远电子为激光雷达产品配套的 ROS SDK 驱动软件包，可运行在 Ubuntu 等 Linux 环境下。该 SDK 的核心是 `aglidar_sdk` 软件包，主要包含以下三大模块：

- 雷达驱动内核 lidar_driver
- ROS 拓展功能
- ROS2 拓展功能

如果希望基于 ROS/ROS2 进行二次开发，可以直接使用本软件包。配合 ROS/ROS2 自带的可视化工具 rviz，即可以查看点云。 

如果希望将雷达驱动集成到自己的工程，作更深一步的二次开发，请基于 lidar_driver 进行开发，它提供了最基本的功能以及一些测试工具，可运行在 Linux、Windows 等平台。

```
  +-----------------------+
  |                       |            +----------+
  |     LiDAR ROS SDK     |            |          |
  |                       |<---------->| ROS/ROS2 |
  |  +-----------------+  |            |          |
  |  |    Driver SDK   |  |            +----------+
  |  +-----------------+  |
  +-----------------------+
```

### 支持的雷达型号

Asensing LiDAR ROS SDK 目前支持两款激光雷达：

- A0（MEMS）
- A2（转镜）

### 支持的点类型

Asensing LiDAR ROS SDK 支持以下两种点类型，用户可自行扩展。

| 类型 | 字段 |
| :---: | ---- |
| XYZI | x, y, z, intensity |
| XYZIRT | x, y, z, intensity, ring, timestamp, range |



## 下载源码

### 使用 git clone 下载

使用 Git 下载 Asensing_LiDAR_ROS 项目源代码，命令如下。

```bash
$ git clone https://gitee.com/asensing/Asensing_LiDAR_ROS.git
```

注意，如果代码不全（例如缺少 lidar_driver 驱动内核），则需要执行如下命令拉取子模块。

```bash
$ cd Asensing_LiDAR_ROS
$ git submodule init
$ git submodule update
```

### 直接下载

用户可从导远电子官网，或联系技术支持，获取最新版本的 Asensing_LiDAR_ROS 源码。



## 安装依赖

### 安装 ROS 

在 ROS 环境下使用雷达驱动，需要安装 ROS 相关依赖库。

- Ubuntu 16.04 - ROS Kinetic desktop
- Ubuntu 18.04 - ROS Melodic desktop
- Ubuntu 20.04 - ROS Noetic desktop

安装方法请参考 http://wiki.ros.org。

**建议安装 ROS desktop-full 版。这个过程会自动安装一些兼容版本的依赖库，如 PCL 库等。这样可以避免花大量时间，去逐个安装和配置它们**。

### 安装 ROS2

在 ROS2 环境下使用雷达驱动，需要安装 ROS2 相关依赖库。

- Ubuntu 16.04 - 不支持
- Ubuntu 18.04 - ROS2 Eloquent desktop
- Ubuntu 20.04 - ROS2 Foxy desktop
- Ubuntu 20.04 - ROS2 Galactic desktop
- Ubuntu 22.04 - ROS2 Humble desktop

安装方法请参考 https://index.ros.org/doc/ros2/Installation/Eloquent/Linux-Install-Debians/

**注意：如果在一台电脑上同时安装 ROS 和 ROS2，可能会出现版本冲突问题，以及需要手工安装其他库（如 Yaml）的麻烦。**

### 安装 Yaml（必需）

版本号:  >= v0.5.2 

*若已安装 ROS desktop-full, 可跳过*

安装方法如下：

```bash
$ sudo apt-get update
$ sudo apt-get install -y libyaml-cpp-dev
```

### 安装 libpcap（必需）

版本号： >= v1.7.4

安装方法如下：

```bash
$ sudo apt-get install -y  libpcap-dev
```

### 安装 Eigen（必需）

版本号： >= v3.0.0

安装方法如下：

```bash
$ sudo apt install -y libeigen3-dev
```



## 编译、运行

可以使用三种方式编译、运行 Asensing_LiDAR_ROS 工程。



### 直接编译

(1) 打开工程内的 *CMakeLists.txt* 文件，将文件顶部的变量 **COMPILE_METHOD** 改为 **ORIGINAL**。

```cmake
#=======================================
# Compile setup (ORIGINAL,CATKIN,COLCON)
#=======================================
set(COMPILE_METHOD ORIGINAL)
```

(2) 在 ROS1（不适用于 ROS2）中，直接编译、运行程序。 

*(注：ROS1 不需要 aglidar_msg 文件夹，将其删掉或移动到 aglidar_sdk 文件夹内即可)*
请先启动 **roscore**，再运行 **aglidar_sdk_node**，最后运行 **rviz** 查看点云。

```bash
$ cd aglidar_sdk
$ mkdir build && cd build
$ cmake .. && make -j4
$ ./aglidar_sdk_node
```



### 基于 ROS-catkin 编译

(1) 打开工程内的 *CMakeLists.txt* 文件，将文件顶部的变量 **COMPILE_METHOD** 改为 **CATKIN**。


```cmake
#=======================================
# Compile setup (ORIGINAL,CATKIN,COLCON)
#=======================================
set(COMPILE_METHOD CATKIN)
```

(2) 将 aglidar_sdk 工程目录下的 *package_ros1.xml* 文件复制到 *package.xml*。

(3) 新建一个文件夹作为工作空间，然后再新建一个名为 *src* 的文件夹, 将 aglidar_sdk 工程放入 *src* 文件夹内。(注：ROS1不需要aglidar_msg文件夹，将其删掉或移动到aglidar_sdk文件夹内即可)

(4) 返回工作空间目录，执行以下命令即可编译、运行。如果使用 .zsh，将第二行替换成 *source devel/setup.zsh*。

```bash
$ catkin_make
$ source devel/setup.bash
$ roslaunch aglidar_sdk start.launch
```

注意：本 SDK 默认使用 ROS2 配置，但我们同时在 aglidar_sdk 目录下提供了一个 set-ros 工具，用于将 SDK 配置改为 ROS1 配置。修改完以后，你就可以直接将 aglidar_sdk 目录拷贝至原有的 ROS1 工程目录中使用了。

参考操作：

```bash
$ cd aglidar_sdk    # 切换到 aglidar_sdk 目录
$ set-ros 1         # 设置为 ROS1 配置
$ set-ros 2         # 也可恢复为 ROS2 配置
```



### 基于 ROS2-colcon 编译

(1) 打开工程内的 *CMakeLists.txt* 文件，将文件顶部的变量 **COMPILE_METHOD** 改为 **COLCON**。

```cmake
#=======================================
# Compile setup (ORIGINAL,CATKIN,COLCON)
#=======================================
set(COMPILE_METHOD COLCON)
```

(2) 将 aglidar_sdk 工程目录下的 *package_ros2.xml* 文件重命名为 *package.xml*。

(3) 返回工作空间目录，执行以下命令即可编译、运行。如果使用 .zsh，将第二行替换为 *source install/setup.zsh*。

```bash
$ source /opt/ros/humble/setup.bash
$ colcon build
$ source install/setup.bash
$ ros2 launch aglidar_sdk start.py
```

如果想编译更快一点，可以开启多线程并行编译，例如同时启动 5 个线程：

```bash
$ colcon build --parallel-workers 5
```

(4) 若需要使用深度图，重新打开一个命令行窗口，设置环境 *source install/setup.bash*, 运行节点 *ros2 run depth_make depth_make*。

```bash
$ source install/setup.bash
$ ros2 run depth_make depth_make
```

提示：若 colcon build 时提示 CMake Error at CMakeLists.txt:45(if)，执行 `source /opt/ros/humble/setup.bash` 即可。

（6）若需要将 rosbag 

另外，不同 ROS2 版本 start.py 的格式可能不同，请使用对应版本的 start.py。如 ROS2 Elequent，请使用 elequent_start.py。

安装 ROS2 可参考 [如何安装 ROS2](https://getiot.tech/ros2/ros2-installation-on-ubuntu)。



## 参数介绍

LiDAR ROS SDK 通过读取配置文件 config.yaml，得到所有的参数。config.yaml 在 aglidar_sdk/config 文件夹中。

> 提示：config.yaml 遵循 YAML 格式。该格式对缩进有严格要求。修改 config.yaml 之后，请确保每行开头的缩进仍保持一致！

config.yaml 包括两部分：common 部分和 lidar 部分。

### common 参数

common 部分设置雷达消息的源（Packet 或点云从哪来）和目标（Packet 或点云发布到哪去）。

```yaml
common:
  msg_source: 1
  send_packet_ros: false
  send_point_cloud_ros: false
```

- **msg_source**
  - 1 – 连接在线雷达。
  - 2 – 离线解析 ROS/ROS2 的 Packet 包。
  - 3 – 离线解析 PCAP 包。
- **send_packet_ros**
  - true – 雷达 Packet 消息将通过 ROS/ROS2 发出。*雷达 ROS packet 消息为自定义 ROS 消息，用户使用 ROS/ROS2 echo 命令不能查看消息的具体内容。这个功能用于录制 ROS/ROS2 的 Packet 包，更多使用细节，请参考 msg_source=2 的情况。*
- **send_point_cloud_ros**
  - true – 雷达点云消息将通过 ROS/ROS2 发出。*点云消息的类型为 ROS 官方定义的点云类型 sensor_msgs/PointCloud2, 用户可以使用 Rviz 直接查看点云。用户可以录制 ROS/ROS2 的点云包，但点云包的体积非常大，所以不建议这么做。更好的方式是录制 Packet 包，请参考 send_packet_ros=true 的情况。*

### lidar 参数

lidar 部分根据每个雷达的实际情况进行设置。

```yaml
lidar:
  - driver:
      lidar_type: A2
      msop_port: 51180
      difop_port: 9988
      min_distance: 0.2
      max_distance: 200
      use_lidar_clock: false
      write_pkt_ts: false
      dense_points: false
      pcap_path: /home/asensing/lidar.pcap
      pcap_rate: 1.0
      calib_file: A2-B-Correction.json
    ros:
      ros_send_by_rows: false
      ros_frame_id: aglidar
      ros_recv_packet_topic: /aglidar_packets
      ros_send_packet_topic: /aglidar_packets
      ros_send_point_cloud_topic: /aglidar_points
```

- **lidar_type**
  
  支持的雷达型号，目前包括 A0、A2 两款雷达。
  
- **msop_port**, **difop_port**
  
  接收 MSOP/DIFOP Packet 的 msop 端口号和 difop 端口号。若收不到消息，请优先确认这两个参数是否配置正确。
  
- **min_distance**, **max_distance**
  
  点云的最小距离和最大距离。这个设置是软件屏蔽，会将区域外的点设置为 NAN 点，不会减小每帧点云的体积。
  
- **use_lidar_clock**
  
  - true – 使用雷达时间作为消息时间戳。
  - false – 使用电脑主机时间作为消息时间戳。
  
- **write_pkt_ts**
  - true – 将电脑主机时间写入 pakcets（前提：use_lidar_clock 为 false）。
  - false – 不将电脑主机时间写入 pakcets。
  
- **dense_points** 输出的点云中是否剔除 NAN points。默认值为 false。
  
  - true – 为剔除，此时点云帧体积更小。
  - false – 为不剔除，保持结构化点云格式。
  
- **pcap_path**
  
  pcap 文件的路径。当 msg_source=3 时有效，即处于回放模式。
  
- **pcap_rate**

  调整回放 pcap 文件的速率。数值越大，播放速度越快。

- calib_file

  指定标定文件。若不指定则使用内置默认的配置，标定文件位于 aglidar_sdk/src/driver_sdk/src/ag_driver/config 目录。

- **ros_send_by_rows** 只有当 dense_points = false 时才有效。
  - true – 发送点云时，按照一行一行的顺序排列点。
  - false – 发送点云时，按照一列一列的顺序排列点。



## rosbag 的录制和回放

### 录制 rosbag

这里假设已经连接在线雷达，并能发送点云到 ROS。

```yaml
common:
  msg_source: 1
  send_packet_ros: true
  send_point_cloud_ros: true
  send_packet_proto: false
  send_point_cloud_proto: false
```

要录制 Packet，首先需要设置 send_packet_ros = true。

修改 ros_send_packet_topic，来改变发送的话题。这个话题包括 MSOP Packet 和 DIFOP Packet。

```yaml
ros:
  ros_frame_id: aglidar
  ros_recv_packet_topic: /aglidar_packets
  ros_send_packet_topic: /aglidar_packets
  ros_send_point_cloud_topic: /aglidar_points
```

ROS 录制 rosbag 的指令如下：

```bash
rosbag record <topic> -O bag
```

ROS2 录制 rosbag 的指令如下：

```bash
ros2 bag record <topic>
```

### 回放 rosbag

首先需要配置 Packet 源，假设录制了一个 rosbag，其中包含话题为 /aglidar_packets 的点云 Packet。

配置 config.yaml 的 common 部分。

```yaml
common:
  msg_source: 2
  send_packet_ros: false
  send_point_cloud_ros: true
  send_packet_proto: false
  send_point_cloud_proto: false
```

点云 Packet 来自 ROS rosbag，因此设置 msg_source = 2。
将点云发送到 ROS，因此设置 send_point_cloud_ros = true。
然后设置 LiDAR 类型，配置 config.yaml 的 lidar-driver 部分，将 lidar_type 设置为 LiDAR 类型。

```yaml
lidar:
  - driver:
      lidar_type: A0
      msop_port: 51180
      difop_port: 7788
      min_distance: 0.2
      max_distance: 200
      use_lidar_clock: false
      write_pkt_ts: false
```

设置接收 Packet 的主题，设置 config.yaml 的 lidar-ros 部分。

```yaml
ros:
  ros_frame_id: aglidar
  ros_recv_packet_topic: /aglidar_packets
  ros_send_packet_topic: /aglidar_packets
  ros_send_point_cloud_topic: /aglidar_points
```

将 ros_recv_packet_topic 设置为 rosbag 中点云 Packet 的话题。

运行程序，回放 rosbag。（注：需要先运行程序）

```yaml
# ROS1
rosbag play <bag_file_name>

# ROS2
ros2 bag play <bag_file_name>
```



## 数据格式转换

### Pcap 转 rosbag

将 config.yaml 配置文件中的 msg_source 参数修改为 3，即数据源为 pcap 文件，并设置文件路径。启动 SDK，同时启动一个录制节点即可。

### Pcap 转 PCD

Driver SDK 的 tool 目录提供了一个 simple_pcdsaver 程序。

### Pcap 转 CSV

Driver SDK 的 tool 目录提供了一个 simple_csvsaver 程序。

### ROS1 和 ROS2 的 rosbag 相互转换

参考《[ROS2 和 ROS1 的 rosbag 转换](https://getiot.tech/ros2/ros2-rosbag-convert)》，使用 rosbags-convert 命令。

### Rosbag 转 PCD

SDK 中包含了一个 pcl_ros 工具包，支持将 rosbag 数据转成 pcd 格式。具体操作方法是先启动 pcl_ros 包中的 bag_to_pcd 节点。

```bash
ros2 run pcl_ros bag_to_pcd
```

此时，bag_to_pcd 节点会订阅 `/aglidar_points` 主题，等待点云数据。因此，当你回放 rosbag 时，就会对每一帧数据进行格式转换，并保存到当前目录中。

实际上，你也可以使用实时雷达，或者 pcap 数据作为数据源，只要发布 /aglidar_points 主题点云数据，即可完成 PCD 格式转换。



## FAQs

### 1. 启动程序后看不到 Rviz 界面？

检查是否正确安装对应 ROS 版本的 Rviz 软件包，可通过以下命令安装或者重新安装。

```bash
sudo apt install ros-${ROS_DISTRO}-rviz
```

注意：上述命令需要先启动 ROS 的环境变量才能看到 ROS_DISTRO 环境变量，你也可以直接指定 ROS 的版本，例如 ros-noetic-rviz。

### 2. 找不到 rostopic 命令？

rostopic 是 ROS1 特有的命令，对应 ROS2 的 ros2 topic 命令。因此，首先需要确定你是否在使用 ROS1 环境，如果是，可通过以下命令安装 rostopic 命令工具。

```bash
$ sudo apt install python3-rostopic
```

### 3. 找不到 colcon 命令？

首先确保你已经 source 了 ROS2 的环境变量。

如果你已经安装 `ros-dev-tools` 工具，那么应该会安装好 colcon 工具。

```bash
$ sudo apt install ros-dev-tools
```

如果依然无法找到 colcon 命令，可以执行下面命令单独安装：

```bash
sudo apt install python3-colcon-common-extension
```

### 4. colcon build 编译出错

使用 `colcon build` 编译 SDK 时出现如“ fatal error: ros/package.h: 没有那个文件或目录”的错误，怎么解决？

这个错误通常是由于你的系统同时安装了 ROS1 和 ROS2 导致的，ros/package.h 是 ROS1 特有的文件，在 ROS2 中找不到。因为目前 CMake 是通过查找文件的方式来判断当前系统是否安装了 ROS 或 ROS2，新版本已修复该问题。

如果你使用旧版本的 SDK，可以通过修改 CMakeLists.txt 文件的方式来解决，具体来说，打开 aglidar_sdk/CMakeLists.txt 文件，找到第 81 行（附近）的 `add_definitions(-DROS_FOUND)`，在前面加上 `#` 符将其注释掉即可。 

```CMake
add_definitions(-DROS_FOUND)
#add_definitions(-DROS_FOUND)
```

### 5. ROS2 录制 rosbag 时出错

ROS2 录制 rosbag 时出现 “Could not load/open plugin with storage id 'sqlite3'” 错误。

首先确定你的系统中是否已经安装 sqlite3，如果已经安装 sqlite3，那么执行下面命令安装对应 ROS 版本的 rosbag 插件。

```SQL
sudo apt install ros-<distro>-ros2bag ros-<distro>-rosbag2*
```

### 6. 虚拟机 Rviz 无法显示 3D 点云

Rviz 软件能接收到点云数据，但 3D 视图窗口无显示。可能是 GPU 驱动的问题，需要关闭 GPU 硬件加速。

临时解决办法是在启动 Rviz 之前执行如下命令：

```Shell
export LIBGL_ALWAYS_SOFTWARE=1
```

再运行 Rviz，例如 rviz2：

```Shell
rviz2 -d /path/to/your/rviz2.rviz
```

然后在另一个终端回放 rosbag：

```Shell
ros2 bag play /path/to/your/rosbag
```

### 7. Rviz 显示点云出现卡顿

导致 Rviz 显示点云时出现卡顿的原因有很多，包括 CPU 性能、内存、网络等因素。在 CPU 和内存资源充足的情况下，如果仍然出现卡顿，可以参考下面解决办法。

首先，打开 Rviz/Rviz2 软件，在左侧 Displays 面板中找到 `PointCloud2`，展开其中的 Topic 选项，将 Reliability Policy 的值修改为 **`Reliable`**，以高可靠方式传输点云数据。

此时，Rviz 显示卡顿的情况可能消失了，也可能更严重了，这和 ROS 网络环境有关。如果你不需要支持分布式 ROS 节点，可以通过配置 `ROS_LOCALHOST_ONLY` 环境变量，让 ROS 消息只在本机环境内传输。

```bash
export ROS_LOCALHOST_ONLY=1
```

如果你需要支持分布式 ROS 节点，可以通过配置 `ROS_DOMAIN_ID` 环境变量来隔离网络中的其他 ROS 环境。`ROS_DOMAIN_ID` 的值默认是 0，你可以根据需要将其配置成其他值，例如：

```bash
export ROS_DOMAIN_ID=1
```

注意，上述环境变量的配置是临时的，你需要在同一个终端启动 SDK 才有效。对于你的特定设备和 ROS 环境，你可以将这些环境变量配置写到 ~/.bashrc 文件中，这样所有新启动的终端都会生效。

另外，在 SDK 的 run.sh 脚本中也加入了相关环境变量配置，如果你使用 `./run.sh` 启动 SDK，Rviz 显示点云卡顿的现象应该有明显好转。

