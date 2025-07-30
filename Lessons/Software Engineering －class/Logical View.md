System feature 
Macro design
Micro design (detail design)

Black box - functional  or system behaviour

Usability - adapt the 
Security reliability


From the [[Software Architecture (SA)]] that deals with decomposing the software system into logical components that respect integrity that support functional and non-functional requirements.

>[!question] Why Architectural styles and architectural patterns provide generic, reusable solutions that can be easily understood?
>These can be easily applied to new problems requiring similar architectural features.

## Architectural Pattern Classification
Decisions based on architectural styles and patterns benefit from years of document experience that highlights:
- The solution approach to a given problem.
- The benefits of these approaches.
- The consequences of employing these approach

Type of system, requirements and desired quality attributes.

In some cases, more than 1 architectural pattern can be used in combination to collectively provide the appropriate architectural solution.


![[Quality Attribute]]

## Achitectural Patterns

| Type          | Description                                                                                                             |                                                       | Quality goals |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------- |
| Data－Centered | Systems that serve as a centralized repository for data, while allowing clients to access and perform work on the data. | Blackboard pattern                                    |               |
| Data Flow     | Systems oriented around the transport and transformation of a stream of data.                                           | Pipe and filter                                       |               |
| Distribution  | Systems primarily involved interaction between several indendent processing units connected via a network.              | Client-server system :communicate with different node |               |
| Interactive   | System that serve user or user-centric systems.                                                                         | Modeldel-view-controller (MVC)                        |               |
| Hierarchical  |                                                                                                                         |                                                       |               |

^9c1320

# Data-centered Systems
![[Screenshot_2025-07-01-16-22-06-571_com.microsoft.teams.png]]
Because of the architecture of these systems, they must consider issues:
- Data integrity
- Communication protocol
- Transaction and recovery (roll-back)
- Security

## Data Flow Systens
>[!note] Definition
>Data Flow systems are decomposed around the central theme of transporting data and transforming the data along the way to meet application-specific requirements.

Typical responsibilities found in components of data-flow systems include:
- Worker components - those that perforn work on data.
- Transport components - those that transporting data.

Worker components abstract data transformation and processing that need to take place before forwarding data streams in the system:
- Encryption and decryption
- Compression and decompotion

## Qualities of the Pipes and Filter architectural pattern
