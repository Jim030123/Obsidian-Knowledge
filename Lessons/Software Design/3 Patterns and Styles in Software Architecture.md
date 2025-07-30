Corresponds to a macro design approach for creating models that depict the quality and function of the software system.

Designed using multiple perspectives, therefore allowing different stakeholders with different backgrounds to evaluate the design to ensure that it addresses their concerns.

Provides black box models used to evaluate the system's projected capabilities as well as its expected quality.

# 1. Architectural Pattern Classification
The choice of applying architectural patterns depends on the:
- Type of system 系统类型
- Requirements 要求
- Desired quality attributes 期望的质量属性

More than 1 architectural pattern can be used in combination to collectively provide the appropriate architectural solution.
可结合使用一种以上的建筑模式，共同提供适当的建筑解决方案。
## Type of system
### 1. Data Centered System
>[!note] Definition
>Systems that serves as a centralized repository for data, while allowing clients to access and perform work on the data.
>作为数据集中存储库的系统，同时允许客户访问数据并对数据进行处理。

Primarily decomposed around a main central repository of data. These include:
1. Data management component - controls, provides and manages access to the system's data.
<br>
2. Worker component - execute operations and perform work based on the data.

Communication in Data Centered systems is characterized by one-to-one bidirectional communication between a worker component and the data management component.
以数据为中心的系统的通信特点是工人组件和数据管理组件之间一对一的双向通信。
![[Pasted image 20250707230547.png]]
Because of the architecture of these systems, they must consider issues:
由于这些系统的结构，它们必须考虑到各种问题：

- Data integrity 数据完整性
- Communication protocol  通信协议
- Transactions and recovery (roll-back) 交易和恢复（回滚）
- Security 安全
![[Pasted image 20250707230800.png]]
#### Blackboard Pattern
Consider a group of scientist at one location using a blackboard (chalkboard, whiteboard or electronic blackboard) to a complex problem.
考虑让一群科学家在一个地方使用黑板（黑板、白板或电子黑板）来解决一个复杂的问题。

Assume that to manage the problem-solving-process, a mediator controls access to the blackboard.
假设为了管理问题解决过程，由一名调解员控制黑板的访问权限。

Once the mediator (controller) assigns control to the blackboard, a scientist evaluates the current state of the problem and if possible, advances it solution before releasing control of the blackboard.
一旦调停者（控制器）将控制权分配给黑板，科学家就会评估问题的当前状态，并在可能的情况下推进问题的解决，然后再释放对黑板的控制权。

With new knowledge obtained from the previous solution attempt, control is assigned to the next scientist who can further improve the problems' state.
利用从上一次解决方案尝试中获得的新知识，控制权被分配给能够进一步改善问题状态的下一位科学家。

This process continues until no more progress can be made, at which point the blackboard system reaches a solutions.
这一过程一直持续到无法再取得进展，黑板系统才会给出解决方案。
![[Pasted image 20250707231326.png]]
## Steps
1. Initialization
   The blackboard is **set up with the initial problem statement** and any **available input data**.
   黑板上有最初的问题陈述和任何可用的输入数据。
<br>
2. Activation
   The **controller selects and activates one or more knowledge sources** based on the **current state of the problem** and the **available data on the blackboard**.
   控制器根据问题的当前状态和黑板上的可用数据，选择并激活一个或多个知识源。
<br>
3. Execution
   The activated **knowledge sources independently analyze the problem**, apply their specialized algorithm or techniques, produce partial solutions or hypotheses.
   被激活的知识源会独立分析问题，应用其专门的算法或技术，产生部分解决方案或假设。
<br>
4. Conflict resolution
   If multiple **knowledge resources generate conflicting or overlapping solutions**, a conflict solution mechanism is **employed to reconcile the differences and select the most appropriate solutions**.
   如果多个知识资源产生了相互冲突或重叠的解决方案，则采用冲突解决机制来调和差异，并选择最合适的解决方案。
<br>
5.  Update
   The **knowledge source update the blackboard with their outputs**.
   知识源将其输出结果更新到黑板上。
<br>
6. Iteration
   The controller **repeats the activation and execution steps until a satisfactory solution is reached**.
   控制器会重复激活和执行步骤，直到找到满意的解决方案。

#### Quality Properties

| Quality         | Description                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modifiability   | Agents are compartmentalized and independent from each other, therefore, it is **easy to add, to remove agents to fit new systems.**<br>代理是分隔的，彼此独立，因此很容易添加或删除代理，以适应新的系统。 |
| Reusability     | Specialized **components can be reused in other applications**.<br>专用组件可在其他应用中重复使用。                                                                                       |
| Maintainability | Allows for **separation of concerns and independence of the knowledge-based agents**, therefore maintaining components becomes easier.<br>允许基于知识的代理关注点分离和独立，因此维护组件变得更加容易。 |

### 2. Data Flows System
>[!note] Definition
>Systems oriented around the **transport and transformation of a stream of data**.
>以数据流的传输和转换为导向的系统。

Decomposed around the central theme of transporting data and transforming the data along the way to meet application-specific requirements.
围绕传输数据和沿途转换数据以满足特定应用要求这一中心主题进行分解。

Responsibilities found in components of data-flow systems include:
数据流系统各组成部分的职责包括:
1. Worker components - abstract data transformation and processing that  need to take place before forwarding data streams in the system:
   工作组件 - 在系统中转发数据流之前需要进行的抽象数据转换和处理：
   <br>
   - Encryption and decryption 加密和解密
   - Compression and decompression  压缩和解压缩
   - Changing data format 更改数据格式
   - Enhancing, modifying, storing, etc of 增强、修改、存储
<br>
2. Transport components - abstract the management and control of the data transport mechanisms, which include:
   传输组件 - 抽象地管理和控制数据传输机制，其中包括:
<br>  
- Inter-process communication (socket, serial, pipe) 
  进程间通信（套接字、串行、管道）
<br>
- Intra- socket communication (direct function call)
  套接字内部通信（直接功能调用）

#### Pipe and Filter
![[Pasted image 20250707235255.png]]
1. Data source 
	Produces the data
<br>
2. Filter 
	Processes, enhances, modifies the data
<br>
3. Pipes 
	Provide connections between data source and filter, filter to filter and filter to data sink.
<br>
4. Data sink 
	Data consumer

Quality Properties

| Quality                | Description                                                                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Extensibility <br>可扩展性 | Processing filters can be added easily for more capabilities.<br>可轻松添加处理过滤器，以实现更多功能。                                                                                                           |
| Efficiency<br>效率       | By connecting filters in parallel, concurrency can be achieved to reduce latency in the system.<br>通过并行连接过滤器，可以实现并发，从而减少系统的延迟。                                                                 |
| Reusability<br>可重用性    | By compartmentalizing pipes and filters, they can both be reused as in other systems.<br>通过对管道和过滤器进行分隔，它们都可以像其他系统一样重复使用。                                                                       |
| Security               | At any point during data flow, security components can be injected into the workflow to provide different types of security mechanisms to the data.<br>在数据流的任何阶段，都可以将安全组件注入工作流，为数据提供不同类型的安全机制。 |
| Maintainability        | Allows for separation of concerns and independence of the filter and pipes^[Maintaining existing componets becomes easier 维护现有组件变得更容易].<br>允许将关注点分开，并使过滤器和管道独立                                 |

### 3. Distributed System
>[!note] Definition
>Systems primarily involve interaction between several independent processing units connected via a network.

Decomposed into multiple processes that collaborate through the network.

One or more distributed processes perform work on behalf of client users and provide a bridge to some server computer, typically located remotely and performing work delegated to it by the client of the system.
一个或多个分布式进程代表客户端用户执行工作，并提供与服务器计算机之间的桥梁，服务器计算机通常位于远程，执行系统客户端委托给它的工作。

>[!todo] Example
>- Internet systems
>- Web services
>- File-or-music sharing systems
>- High-performance systems
>- Client-server system

![[Pasted image 20250708001321.png]]

| Quality          | Descirption                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interoperability | Allows clients on different platform to operate with servers of different platform.<br>允许不同平台的客户端与不同平台的服务器一起运行。                                                                 |
| Availability     | By separating server data, multiple server nodes can be connected as backup to increase the server data or services availability.<br>通过分离服务器数据，可以连接多个服务器节点作为备份，以提高服务器数据或服务的可用性。 |
| Reusability      | By separating server from clients, **services or data provided by the server can be reused in different platform**.<br>通过将服务器与客户端分离，服务器提供的服务或数据可以在不同的平台上重复使用。                   |


### 4. Interactive System
>[!note] Definition
>Systems that serves users or user-centric systems.

![[MVC]]
### 5. Hierarchical System
>[!note] Definition
>Systems where components can be structured as a hierarchy to reflect different levels of abstraction and responsibility.