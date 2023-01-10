**Introduction**

Folkhälsan is a social and healthcare organization for Swedish speaking Finns in Finland. In
this project we are going to develop a web application for Folkhälsan healthcare personnel to
manage their work shifts. Currently, they are managing their shifts with old-style papers.
There is a shift manager who maintains and distribute shift-times between healthcare
workers. After that they print it and distribute for each personnel one paper showing their
work shifts during a period. There is also a wide shift paper on the information wall in
Folkhälsan which contains all the information of shifts for each healthcare worker(nurse)
working there.

**Problem**
As a healthcare-worker of Folkhälsan it’s not a pleasure to look at a paper which is
messy, untidy, and hard to distinguish shifts from each other. Paper becomes messier
over time as personnel adds details and notes to it. For example, if a worker wants to
change their shifts with other worker, they must make changes into the shift paper,
which makes it harder to read.

**Possible solution**
Creating a web application (in future also mobile app) providing functionalities for
efficient and easy ways of managing workers’ shifts. Workers can see and make
changes to their shift lists in a clean and easy way.

**Stakeholders**

- Developers
- Healthcare-workers
- Shift-managers
- System administrators

_Developers_ : Software engineers designing and implementing the web application. Access the
source code and documentation of the app.

_Healthcare-workers_
There are maybe multiple kinds of healthcare-workers in Folkhälsan. Currently two of them
are known. Nurse and practical nurse. Each of those gets their own working-shift paper.

_Shift-managers_
Person being responsible for distributing shift-times among available workers in every
period.


_System administrators_
Responsible for maintaining the web application to make sure Shift-managers and workers
get easy access to the system.

**Architecture**
We are going to develop a client-server model of our web application being deployed on a
reliable PaaS. End-Users (healthcare workers and shift-managers) get access to the
application via client-application (web-browser). On the server-side there is a web-server
program running all the time providing services to the client-side application.

**UI** : We will use **ReactJS** alongside other external libraries (if needed) to implement the User
Interface (consumer-face) side of the application. For styling our web application’s view we
use a CSS-framework such as **Bootstrap** or Material-UI.

**Backend** : Possible technologies for implementing backend depends on our resources. We
may use _JavaScript running on Nodejs_ - platform with **Express-library** or Django with
python.


User Requirements:

```
User-Stories
```
- A shift-manager can log into their account to managing shifts
- A shift-manager can assign healthcare-workers to a group
- A shift-manager can remove a healthcare-worker from a group
- A shift-manager can create a shift-list for a group
- A shift-manager can modify/update a shift-list of a group
- A shift-manager can logout of their account
- A shift-manager can accept/reject requests from healthcare-workers
- A healthcare-worker can log into their account
- A healthcare-worker can see their current shift-list
- A healthcare-worker can view their old shift-lists
- A healthcare-worker can request a shift-change
- A healthcare-worker can register a shift as done
- A healthcare-worker can add notes to a shift

User-story scenarios

```
“A nurse (healthcare-worker) logs into her/his account and view her/his current shift-
list. After the day ends, She/He enters again into her/his account and register today as
a shift-day done. After this, the shift-manager needs to accept or reject the requested
register. Shift-manager checks whether that guy has really been at work or not. If yes,
then accept the shift and marks it done otherwise request will be rejected”
```

