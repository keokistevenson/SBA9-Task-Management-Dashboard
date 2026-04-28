# Reflection Document:


## How you implemented React and TypeScript features

I used react components and hooks  to manage task data, filtering, sorting, etc. I used TypeScript interfaces to define the task, component props, task statuses, priorities, filters, and sorting options. This helped me keep data flowing consistently between components and catch errors early.

## The challenges you encountered and how you overcame them

One challenge was deciding how to organize state and how components should communicate. I initially had questions about where state should live and how to connect the form, filter, and task list.  Another challenge was implementing filtering and sorting together, and I addressed that by first getting filtering working and then layering sorting on top of the filtered results.

## Your approach to component composition and state management
I used the Dashboard component as the central place to manage shared state and coordinate communication between components.