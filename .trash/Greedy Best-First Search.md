# Key Concept
A form of best-first search that expands first the node with the lowest $h(n)$ values - the node that appears to be closets to the goal - on the grounds that this is likely to lead to a solution quickly.

$$f(n) = h(n)$$

# Straight Line Distance $h_{SLD}$
Goal: Bucharest, need to know the straight-line distances to Bucharest

![[Pasted image 20250719235336.png]]

For example, $h_{SLD}$ (Arad) = 366. Notice that the values of $h_{SLD}$ cannot be computed from the problem description itself. Moreover, it takes a certain amount of world knowledge to know that $h_{SLD}$ is correlated with actual road distances and is.^[Useful heuristic] 


>[!note] Calculation
>Shows the progress of a greedy best-first search using $h_{SLD}$ to find a path from Arad to Bucharest.
>![[Pasted image 20250719235156.png]]
>The first node to be expanded from Arad will be Sibiu because the heuristic says it is closer to Bucharest than is either Zerind or TImisoara.
>
>The next node to be expanded will be Fagaras because it is now closest according to the heuristic.
>
>Fagaras in turn generates Bucharest, which is the goal.
>
>For this particular problem, greedy best-first search using $h_{SLD}$ finds a solution without ever expanding a node that is not on the solution path.
>
>The solution it found does not have optimal cost, however: the path via Sibiu and Fagaras to Bucharest is 32 miles longer than the path through Rimnicu Vilcea and Pitesti. ^[That why the algorithm is called "greedy" - on each iteration it tries to get as close to a goal as it can, but greediness can lead to worse results than being careful.]

Complete finite state spaces, but not in infinites ones. 
- The worst-case time and space complexity is $O(|V|)$. 
- With good heuristic function, the complexity can be reduced substantially, reaching $O(bm)$.
