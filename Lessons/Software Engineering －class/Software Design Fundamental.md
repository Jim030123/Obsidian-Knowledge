Used as a basis for reasoning and serve as justification for almost all design decisions.

Provide designers with foundation from which other more sophisticated design methods can be applied.

Fundamental to all software design efforts can applied during architectural, detailed and construction begins
# 1. Modularization^[Most importatnt design principles in software design]
Modules may work as basic constructs for the entire software.
使软件系统在开发生命周期的各个阶段都能得到管理。 模块可作为整个软件的基本结构。

>[!note] Definition
>A technique to divide a software system into multiple discrete and independent modules, which are expected to be capable of carrying out tasks.

It is easy to work on adding separate more modules to a program without being hindered by the complexity of its functions.

| Phase                                                      | Detail                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Design phase                                               | Modularization is the principle that drives the continuous decomposition of the software system until fine-grained components are created.<br>模块化原则促使软件系统不断分解，直至形成细粒度的组件。<br>                                                                                |
| Software architecture and detailed and construction design | When applied effectively, it provides a roadmap for software development starting from coarse grained components that are further modularized into fine-grained components directly related to code.<br>如果应用得当，它将为软件开发提供一个路线图，从粗粒度组件开始，进一步模块化为与代码直接相关的细粒度组件。 |

Software systems can be decomposed into modules that allow the system's complexity to be manageable and allow the system to be efficiently built, maintained and reused.
软件系统可以分解成若干模块，从而使系统的复杂性易于管理，并能高效地构建、维护和重复使用。

# 2. Abstraction
Fundamental for managing complexity in all activities of the software design phase.
是管理软件设计阶段所有活动复杂性的基础。
>[!note] Definition
>The principle that **deals with creating conceptual entities required to facilitate problem solving** by focusing on essential characteristics of entities - in their active context -**while deferring unnecessary details**.
>该原则通过关注实体的基本特征--在其活动背景下--同时忽略不必要的细节，来创建促进问题解决所需的概念实体。

Modularizing systems in an ad hoc manner leads to designs that are incoherent.
临时将系统模块化会导致设计不连贯

The level of detail required to think about a problem is adjusted to productively modularize a system, this  allows for the creation of coherent entities that can be used to represent their possible variations in the problem's context and domain.
通过调整思考问题所需的详细程度，可以有效地将系统模块化，这样就可以创建连贯的实体，用来表示问题的上下文和领域中可能出现的变化。

At the software architecture level: abstraction helps during the identification of software components and their interfaces.
在软件结构层面：抽象化有助于识别软件组件及其接口。

At the detailed design phase: Abstraction helps identify the entities functions and interfaces required to realize the component's provided services.
在详细设计阶段： 抽象有助于确定实现组件服务所需的实体功能和接口。

At the construction level: Abstraction helps in the further design of functions identified during detailed design.
在建筑层面： 抽象有助于进一步设计详细设计中确定的功能。

The principle of abstraction can be classified as:
抽象原则可分为以下几种：

- Procedural abstraction 程序抽象
	Specific type of abstraction that simplifies behavioural operations containing a sequence of steps or other procedural abstractions.

>[!todo] Consider a client-server application in which the client sends data to the server through the Internet.
>The Send procedural abstraction can be used to denote a series of operation.
>
>Retrieving the server's information^[Internet Protocol (IP) address, port number], opening a connection, sending the message and closing the connection.
<br>
- Data abstraction
	Used to simplify the structural composition of data objects.

>[!note] Message data abstraction can be used to represent various messages with different attributes:
>- Message's ID
>- Content
>- Format
>
# 3. Cohesion and Coupling
When a software program is modularized, its tasks are divided into several modules based on some characteristics.

>[!note] Definition of Cohesion
>A measure that defines the degree of intra-dependability within elements of a module.

Modules are sets of instructions put together in order to achieve some tasks. Considered as single entities but may refer to each other to work together.

>[!note] Definition of Coupling
>A measure that defines the level of inter-dependability among modules of a program.

It tells at what level the modules interfere and interact with each other. The lower coupling, better program

# 4. Separation of interface and implementation

Interface of a component defines the set of inputs and outputs that the component provides to the rest of the system.

Implementation is the internal code that performs the actual processing.

[[Unit Testing|Unit tests]] can be written to test the functionality of the component in isolation without requiring knowledge of the internal implementation.

Allows text 

# 5. Encapsulation 封装
>[!note] Definition
>Principle that deals with providing access to the services of conceptual entities^[Modules, component 模块、组件] by exposing only the information that is essential to carry out such services while hiding details of how the services are carried out.
>概念实体的服务访问原则，即只公开执行此类服务所必需的信息，而隐藏如何执行服务的细节。

A way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular objects.
一种限制直接访问对象某些组件的方法，因此用户无法访问特定对象所有变量的状态值。

Provides the principle for enhancing the efficiency of the collaboration among modularized units.
# 6. Sufficiency and completeness
>[!note] Definition of sufficiency
>Measures how well design units are at providing only the services that are sufficient for achieving their intent

>[!note] Definition of completeness
>Measures how well design units are at providing the required services to achieve their intent
>

An appropriate software design always guarantees the overall sufficiency and completeness of any software.^[Project requirement, ensure that the program is comprehensive]. It also makes sure that the program or software has been adequately constructed.