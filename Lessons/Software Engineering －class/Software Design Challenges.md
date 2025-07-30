# Challenge 挑战
Has evolved from an ad hoc^[didn't planning properly 没有适当规划] and sometimes overlooked phase to an essential phase of the development life cycle.
已从一个临时、有时被忽视的阶段发展成为开发生命周期的一个重要阶段。

The increasing complexity of today's systems has created a set of particular challenges that makes it hard for software engineers to meet the continuous customer demands for higher software quality.
当今系统的复杂性与日俱增，给软件工程师带来了一系列特殊的挑战，使他们难以满足客户对更高软件质量的持续要求。

These challenge have prompted software engineers to pay closer attention to the design process to better understand, apply and promulgate well known design principles, processes and professional practices to overcome these challenges.
这些挑战促使软件工程师更加关注设计过程，以便更好地理解、应用和推广众所周知的设计原则、过程和专业实践，从而克服这些挑战。

Volatility^[Keep on changing 不断变化], design process, quality issues^[Include performance, usability, security 包括性能、可用性、安全性], distributed software development, efficient allocation of human resources to development tasks,  limited budgets, unreasonable expectation and schedules, fast changing technology and accurate transformation from software requirement to a software product.
易变性、设计过程、质量问题]、分布式软件开发、为开发任务有效分配人力资源、有限的预算、不合理的期望和时间表、快速变化的技术以及从软件需求到软件产品的准确转换

## Challenge 1: Requirements Volatility 需求波动
Major reason for complexity of software projects is constant change of requirements.
软件项目复杂的主要原因是需求不断变化。

When designed properly, software can be modified or extended easily, however, when designed poorly, modifying software can become overwhelming and lead to all sorts of complex problems.
如果设计得当，软件可以很容易地进行修改或扩展，但如果设计不当，修改软件就会变得力不从心，导致各种复杂的问题。

Much effort is put into the requirements phase to ensure that requirements are complete and consistent, that is rarely the case.
我们在需求阶段投入了大量精力来确保需求的完整性和一致性，但实际情况却很少如此。

>[!warning] Changing requirement on software design 改变对软件设计的要求
>Leaving the software design phase as the most influential one when it comes to minimizing the effects of new or changing requirements.^[Requirement volatility is challenging because it impacts future or current development efforts 需求的不稳定性具有挑战性，因为它会影响未来或当前的开发工作。]
>在尽量减少新需求或需求变化的影响方面，软件设计阶段的影响最大。

Force designers to create designs that provide solutions to problems at a given state while also anticipating changes and accommodating them with minimal effort.
迫使设计师在设计时，既要为特定状态下的问题提供解决方案，又要预测变化，并以最小的代价适应变化。

This requires designers to have:
- A strong understanding of the principle of software design 对软件设计原理有深刻理解
- Develop skills to manage complexity  培养管理复杂性的技能
- Change in software development 软件开发的变化

## Challenge 2: Process 过程^[Process-oriented field 注重过程的领域]
The core of every software development company, there should be a **sound, well-understood and consistent process** for software development.
作为每家软件开发公司的核心，软件开发应该有一个**完善、理解透彻、连贯一致的流程。

Software processes involve a broad set of activities and tasks that **bridge the gap between requirements and construction**^[Development phase 开发阶段] while adhering to a set of project-specific constraints.
软件流程涉及一系列广泛的活动和任务，这些活动和任务**弥补了需求与构建之间的差距**，同时遵守一系列特定于项目的约束条件。

>[!warning]  A company's design process is not well established 公司的设计流程不完善
>- Poor understood 
>理解力差
>
>- Is approached with minimalistic expectations that ignore aspects that are essential to executing a successful design phase.
>  而忽略了对成功实施设计阶段至关重要的方面。

Focusing design effort on creating independent software products:
- Simple class diagrams  简单的类图
- User interfaces 用户界面

While ignoring other design activities may create complexities later on during the system test and maintenance.
而忽视其他设计活动则可能会在日后的系统测试和维护过程中造成复杂问题。

It is challenging because essential design process activities are often overlooked, done in an ad hoc manner or simply not done at all.
之所以具有挑战性，是因为基本的设计流程活动常常被忽视、以临时方式进行或根本没有进行。

## Challenge 3: Technology
Operating environment, the technology for designing and implementing today's software systems continues to evolve to provide improved capabilities.
在运行环境方面，设计和实施当今软件系统的技术也在不断发展，以提供更好的功能。

>[!todo] Example
>- Modelling language and tools 建模语言和工具
>- Programming languages 编程语言
>- Development environments 开发环境
>- Design patterns and strategies 设计模式和策略

Software designers employing different methodologies and technologies, all on the same software system.
软件设计师在同一个软件系统上采用不同的方法和技术。

Design models need to be derived from existing code, modified and made interoperable with newer technologies.^[Creates a demand for capable software designers that can assimilate new technology quickly and effectively to succeed at designing software 对有能力的软件设计师提出了要求，他们必须能够快速有效地吸收新技术，从而在软件设计方面取得成功].
设计模型需要从现有代码中提取、修改并与新技术实现互操作。

Technology aspects of software design is challenging because it is fast and everchanging.^[Therefore designers must keep abreast of the lastest advances and become proficient 因此，设计人员必须紧跟最新进展，精通].
软件设计的技术方面具有挑战性，因为它日新月异。

## Challenge 4: Ethical and Professional Practices
Designers create blueprints that drive the construction of the software. During this creation process, designers are required to determine how design decisions affect the environment and the people who use the software.
设计人员绘制蓝图，推动软件的构建。 在创建过程中，设计师需要确定设计决策对环境和软件使用者的影响。

The software development process is traditionally carried out under tight schedule constraints.^[This creates external pressures that can lead designers to deviate from the normal design approach to meet these demands, which can have catastrophic consequences. 这就产生了外部压力，可能导致设计人员偏离正常的设计方法来满足这些要求，从而造成灾难性的后果。]
软件开发过程历来都是在紧迫的时间限制下进行的。

## Challenge 5: Managing Design Influences 
Shaped by many different influences from stakeholders, the development organisation and other factors.
受利益相关者、开发组织和其他因素的多种不同影响。

Managing these influences is essential for maximizing the quality of systems and  their related influence on future business opportunities.
管理这些影响因素对于最大限度地提高系统质量及其对未来商机的相关影响至关重要。

Stakeholder:
- Designing software is nondeterministic activity. Different designers and different solutions will be proposed.
	设计软件是一项非确定性活动。 不同的设计者会提出不同的解决方案。
<br>
- This creates a challenge when trading off design alternatives that all the stakeholder's concerns.
	这就给所有利益相关者在权衡设计方案时带来了挑战。
<br>
- In such projects, creating that scarifies some desired customer capability, but provides other desired customer capability, but provides other desired properties.^[Quick time to market, relibility or lower cost 快速上市、可靠性高或成本低].
	在这些项目中，创建的项目会削弱客户所需的某些能力，但会提供客户所需的其他能力，但会提供客户所需的其他属性。