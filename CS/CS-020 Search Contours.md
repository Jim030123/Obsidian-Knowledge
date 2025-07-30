---
done: false
remark:
---

# Key Concept
A useful way to visualize a search is to draw contours in the state space, just like the contours in a topographic map.
将搜索可视化的一个有用方法是在状态空间中绘制等高线，就像地形图中的等高线一样。

>[!todo] Example
>Map of Romania showing contours at $f = 380$, $f = 400$ and $f = 420$ with Arad as the start state. Nodes inside a given contour have $f = g + h$ costs less than or equal to the contour value.
>罗马尼亚地图，显示以阿拉德为起始点的 $f=380$、$f=400$ 和 $f=420$ 等值线。特定等高线内的节点的 $f = g + h$ 成本小于或等于等高线值。
>
>![[Pasted image 20250720135532.png]]
>Inside the contour labeled 400, all nodes have $f(n)=g(n)+h(n) \le 400$. Then, because A star expands the frontier node of lowest $f$-cost, that an A star search fans out from the start node, adding nodes in concentric band s of increasing $f$-cost. 
>在标注为 400 的等高线内，所有节点都有 $f(n)=g(n)+h(n) \le 400$。那么，由于 A 星扩展了成本最低的前沿节点，A 星搜索就会从起点节点向外扩展，在成本不断增加的同心带上添加节点。
>
>Uniform-cost search, also have contours, but of $g$-cost, not $g+h$. The contours with uniform-cost search will be "circular" around the start state, spreading out equally in all directions with no preference towards the goal
>均匀成本搜索也有等高线，但成本为$g$，而不是$g+h$。均匀成本搜索的等高线将围绕起始状态 "环形"，向各个方向平均扩散，不偏向目标
>
>With A star search using a good heuristic, the $g+h$ bands will stretch toward a goal state and become more narrowly focused around an optimal path.
>使用好的启发式星形搜索时，$g+h$ 带会向目标状态延伸，并更紧密地围绕最佳路径。
>
>$g$ costs are monotonic $g$ 成本是单调的
>The path cost always increases as you go along a path, because action costs always positive. Therefore you get concentric contour lines that don't cross each other, and if you choose to draw the lines fine enough, can put a line between any 2 nodes on any path.
>路径成本总是随着路径的增加而增加，因为行动成本总是正数。因此，你可以得到互不交叉的同心轮廓线，如果你选择将线条画得足够细，就可以在任意路径上的任意两个节点之间画一条线。