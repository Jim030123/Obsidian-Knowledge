# Key Concept
One that uses domain specific hints about the location of goal - can find solutions more efficiently than an uninformed strategy.

The hints come in the form of a heuristic function $h(n)$^[It may seem odd that the heuristic function operates on a node, when all it really needs is the node's state. It is traditional to use $h(n)$ rather than $h(s)$ ro be consistent with the evaluation function $f(n)$ and path cost $g(n)$]
$h(n)$ = estimated cost of the cheapest path form the state at node $n$ to a goal state.

>[!todo] Route-finding problems
>Can estimate the current state to a goal by computing the straight-line distance on the map between 2 point.
>



![[Pasted image 20250715103108.png]]
# Performance
>[!info] Formula
>$$N = 1 + b^{*} + (b^{*})^2 + \cdots + (b^{*})^d$$

