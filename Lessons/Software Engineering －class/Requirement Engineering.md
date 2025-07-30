>[!note] Definition
>The discipline within software engineering that is concerned with the systematic approach to requirements specification, mainly through the following activities:
>软件工程中的一门学科，主要通过以下活动系统地进行需求规格说明：
>- Elicitation
>- Analysis
>- Specification
>- Validation

# Elicitation
>[!note] Definition
>Activity that deal with identifying stakeholders, uncovering what the customer needs and wants and determining the non-functional requirements.
>确定利益相关者、了解客户的需求和愿望以及确定非功能性需求的活动。

Common source of requirement:
- Stakeholders
- Goals
- Domain knowledge
- Operational
- Organizational environment

Techniques:
- Interview
- Meetings
- Observations
- Scenarios

**Software Requirements Specification (SRS)**![[Pasted image 20250707220346.png]]
# Analysis

>[!note] Definition
>Requirements are analysed in their raw form to address issues such as requirements that are contradicting, incomplete, vague or just wrong.
>对需求的原始形式进行分析，以解决自相矛盾、不完整、模糊或错误的需求等问题。

Software architects spend a great deal of time evaluating each requirement to determine its impact on the system design as well as its impact all other identified requirement.

## Software architects may be required to carry out important tasks:
## 1. Requirements classification
Refer to the activity and process required for identifying the nature of each requirement.

Classification is important in determining the relative importance of each requirement and can serve as a driver for **prioritization of work units** and **negotiation and trade-off thoughts.**

| Common Criteria for Requirement Classification | Description                                                                                                                                                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Functional vs non functional<br>功能与非功能         | Differentiates between **requirements that specify the functional aspects of the system** vs the one that place **constrains on how the functional aspects** are achieved.<br>将指定系统功能方面的需求与对如何实现功能方面进行限制的需求区分开来。 |
| Product vs process                             | Requirement placed on the system product vs requirements placed on the process **employed to build the product**.<br>对系统产品的要求与对构建产品过程的要求。                                                                        |
| Imposes vs derived 强制与派生                       | Requirements **imposed by stakeholders** vs requirements that are **derived by the development team**.<br>利益相关者提出的需求**与开发团队提出的需求**。                                                                              |
## 2. Requirements Prioritization
Done to help identify the most important functions of the software systems.

Prioritization can help refine the projected schedule by determining which requirements need to be developed first or can help identify and deploy at different times.

## 3. Requirements negotiation
Negotiation when conflicts between requirements are identified during requirements.

Negotiation takes place among stakeholders and resolutions to conflicts are made while taking into account requirements priorities.

## 4. Conceptual modelling
Created to further identify the requirements by understanding their context, discovering the bounds of the software system.
通过了解需求的背景，发现软件系统的边界，从而进一步确定需求。

Conceptualizing is where architectural designs since system decomposition is essential to developing effective conceptual models.
由于系统分解对开发有效的概念模型至关重要，因此概念化就是架构设计。
### Specification and Validation
The requirements phase where the results of elicitation and analysis are formally captured and documented in an appropriate format for the use and review of all stakeholders.
在需求阶段，需求征集和分析的结果被正式记录下来，并以适当的格式提供给所有利益相关者使用和审查。

It is important that each requirement exhibit certain characteristics desired for designing successful systems:
重要的是，每项要求都要表现出设计成功系统所需的某些特征：
- Specific 具体内容
- Correct 正确
- Complete 完整
- Consistent 始终如一
# Designing the Architecture 设计建筑
## 4+1 View Model
![[4 + 1 View Model]]

## Evaluating the Architecture
>[!note] Definition
>The process of determining how well-suited architecture is for developing a system that meets both its intended functional and quality requirements.

Functional Perspective: Architectures need to introduce the appropriate abstraction for the services that the system is required to provide.

Ability to support expected system quality requires more effort to ensure that the proposed architecture provides a good approach to a system's development.