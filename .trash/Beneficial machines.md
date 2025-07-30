>[!note] Definition
>The **[[standard model]] **has been a **useful guide for AI research since its inception**, but it is probably **not the right model in the long run**. The reason is that the standard model assumes that will **supply fully specified objective to the machine**.
>**标准模型**自问世以来一直是人工智能研究有用的指南，但从长远来看，它**可能并不是正确的模型**。原因在于，标准模型假定**会向机器提供完全指定的目标**

^9a998c

---
## Example

>[!todo] Chess or shortest path computation 国际象棋或最短路径计算
>Task comes with an objective built in.^[The standard model is applicable. 标准模型适用。]
>任务自带目标
>
 >We move into the real world, however, it **becomes more and more difficult to specify the objective completely and correctly**.'
 >然而，我们进入现实世界后，**越来越难以完整、正确地指定目标**。
 >
>>[!question] What happens if the machine is intelligent enough to reason and act beyond the confines of the chessboard. 如果机器有足够的智慧，能够在棋盘之外进行推理和行动，那会发生什么？
>>
>>It might attempt to increase its chances of winning by such:
>>它可能会试图通过以下方式增加胜算：
>>- Ruses as hypnotizing  把 RUSS 当作催眠术
>>- Blackmailing its opponent 勒索对手
>-> Bribing the audience 收买观众
>>
>>To make rustling noises during its opponent's thinking time.^[Always place the board so the sun is in your opponent's eyes. 放置棋盘时，一定要让阳光直射对手的眼睛。]。
>>在对手思考时发出沙沙声。
>>
>>It might also **attempt to hijack additional computing power for itself**.^[These behaviors are **not "unintelligent"** or **"insane"**; they are a for the machine 这些行为**并非"不聪明"或"疯狂"**，而是将获胜**定义为机器唯一目标的必然结果**。]
 >>它还可能**试图为自己劫持额外的计算能力**。

>[!todo] Self-driving car 自动驾驶汽车
>One might think that the **objective to reach the destination safely**. But driving along any road incurs **a risk of injury due to other errant drivers, equipment failure**. Thus, a strict goal of safety requires staying in the garage.
>人们可能会认为，**安全抵达目的地**。但**在任何道路上行驶都有可能因其他驾驶员的失误或设备故障而受伤**。因此，严格的安全目标要求将车辆停在车库中。
>
>There is tradeoff between making **progress towards the destination and incurring a risk of injury**.
>在向目的地**前进和承担受伤风险**之间存在权衡。
>
>How should this tradeoff be made?
>应该如何权衡？
>
>Furthermore, to what extent **can we allow the car to take actions that would annoy other drivers**?
>此外，我们在多大程度上**可以允许汽车采取会惹恼其他驾驶员的行动**？
>
>How much should the **car moderate its acceleration, steering and braking to avoid shaking up the passenger**?
>**汽车应在多大程度上缓和其加速、转向和制动，以避免晃动乘客**？
>
>These kind of questions are **difficult to answer a priori**. They are particularly **problematic in the general area of human-robot interaction**.
>这类问题**很难先验地回答**。在人**与机器人互动的一般领域**，**这些问题尤其棘手**。

# Value Alignment Problem 价值对齐问题
![[Value Alignment Problem]]
 
It is impossible to anticipate all the ways in which a **machine pursing a fixed objective might misbehave**.
我们不可能预料到一台追求固定目标的**机器会以何种方式做出错误行为。

We **don't want machines that are intelligent in the sense of pursuing their objectives**, but then need a new formulation - one in which the **machine is pursuing our objectives, but is necessarily uncertain as to what they are**.
我们不希望**机器在追求目标的意义上是智能的，而是需要一种新的表述--在这种表述中，**机器追求我们的目标，但必然不确定这些目标是什么**。

When a **machine knows that it doesn't know the complete objective**, it has an **incentive to act cautiously, to ask permission**, to **learn more about our preferences through observation and to defer to human control**.^[Ultimately, want agents that are provably beneficial to humans. 归根结底，我们想要的是对人类有益的代理。]
当**机器知道它不知道完整的目标**时，它就有**动力谨慎行事，征求许可**，**通过观察更多地了解我们的偏好，并服从人类的控制**。

---









