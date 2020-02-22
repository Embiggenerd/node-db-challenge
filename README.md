# SSE extension of nore api sprint

## Description

Server sent events are used to stream latest posted data to client.

## Instructions

Run the server, go to localhost:4000/, and start posting data to localhost:4000/tasks, localhost:4000/resources, localhost:4000/projects and watch the client magically update.

The point is to show how easy very basic streaming data is to implement. This can be built on top of, messages only sent on updates to db, and write locks put on data after sse send, and unlocked after a success message received from client. The sky is the limit!