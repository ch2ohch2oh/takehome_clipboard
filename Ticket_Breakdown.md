# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Task 1 Create db table to store facilities and agent custom ids
Create a new database table `AgentAlias(facilityID*, agentID*, customID)`,
where the start marks the primary key of the table.

### Task 2 Define a function to set the custom id of agents
Create a new function called `setAgentCustomID(facilityID, agentID, customID)`, which takes in three parameters to set the customID of 
an agent in the database. The function should check for the case
where the `facilityID` and `agentID` are not valid.

### Task 3 Update the getShiftsByFacility to include agent `customID`
Update the `GetShiftsByFacility` function to include the `cusomtID` of
each agent as specified in the `AgentAlias` table. 
This can be done easily by a table join on the backend.

### Task 4 Update the `generateReport` function to include agent `customID`
Update the `generateReport` function such that the `customID` field
is correctly rendered in the generated pdf file.