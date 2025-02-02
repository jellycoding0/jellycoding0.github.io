---
title: "[Robot] 변환행렬 Transformation Matrix"

categories:
  - Robotics

use_math: true
---



<br>


## <span style="color:rgb(81, 132, 209) ;"> 영상
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/nV6280zZENA" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>


## <span style="color:rgb(81, 132, 209) ;"> 변환 행렬(Transformation Matrix)



로봇공학에서 매우 중요한 개념으로 로봇이 움직일때, 그 위치와 방향을 수학적으로 나타내는 방법

- 4X4행렬에 **회전과 이동** 정보를 모두 담음

<br>

**3D 변환 행렬 (4x4 행렬)**
- $R$ : 회전 행렬 요소 → **방향(Orientation) 표현**
- $P$ : 각 축으로의 이동을 나타냄 → **위치(Position) 표현**

$$T_{sb}=
\begin{bmatrix}R_{11} & R_{12} & R_{13} & P_x \\R_{21} & R_{22} & R_{23} & P_y \\R_{31} & R_{32} & R_{33} & P_z \\0      & 0      & 0      & 1\end{bmatrix}
$$

### <span style="color:rgb(81, 132, 209) ;"> 회전 행렬 (Rotation Matrix)

$$
R_x(\theta) = \begin{bmatrix}
1 & 0 & 0 \\
0 & \cos(\theta) & -\sin(\theta) \\
0 & \sin(\theta) & \cos(\theta)
\end{bmatrix} \\ 
\\  
$$

$$
R_y(\theta) = \begin{bmatrix}
\cos(\theta) & 0 & \sin(\theta) \\
0 & 1 & 0 \\
-\sin(\theta) & 0 & \cos(\theta)
\end{bmatrix}\\
$$

$$
R_z(\theta) = \begin{bmatrix}
\cos(\theta) & -\sin(\theta) & 0 \\
\sin(\theta) & \cos(\theta) & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

### <span style="color:rgb(81, 132, 209) ;">이동 행렬 (**Translate)**

$$
T_{xyz} = \begin{bmatrix}
1 & 0 & 0 & P_x\\
0 & 1 & 0& P_y \\
0 & 0 & 1& P_z \\0 & 0 & 0& 1
\end{bmatrix}
$$