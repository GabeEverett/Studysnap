# StudySnap

StudySnap is a small study companion designed to help students turn a homework question or confusing topic into something easier to understand and study.

The goal is not to create a tool that simply gives an answer. The goal is to create a small interaction that helps the student take the next step.

---

## Live Prototype

https://gabeeverett.github.io/Studysnap/

## GitHub Repository

https://github.com/gabeeverett/Studysnap

---

# Back-End Thinking

## 1. What data does this tool need?

StudySnap needs the text of the student's homework question, assignment, or topic.

The student provides this through the main text input. The tool can also use the type of help the student chooses, such as breaking the question down, creating a quiz, or creating a study guide.

---

## 2. Where is it stored?

For the prototype, the student's question is handled in the browser.

The prototype does not need a database or user account. If session information is stored, it can be kept locally in the browser using `localStorage`.

---

## 3. Is it temporary or persistent?

The student's current question and generated response are temporary.

The prototype may use limited local storage to demonstrate remembering information between page loads, but StudySnap does not need to permanently store a student's homework history.

---

## 4. Does the system need memory between sessions?

No long-term memory is required for StudySnap's core function.

The tool should be able to work from the question the student provides each time they use it.

Limited local memory can be used if it helps preserve a recent study session, but the tool should not need to build a permanent profile of the student.

---

## 5. Does the system require AI inference?

The prototype does not require AI inference.

The mechanical version can use JavaScript rules to demonstrate the core input, processing, and output system.

A future version could use an AI model to create more detailed explanations, study guides, or quizzes, but AI is not necessary for demonstrating the core interaction.

---

## 6. How many API calls are realistically required?

The current prototype requires zero API calls.

If AI were added in a future version, one API call could be used to send the student's question to an AI model and receive a study response.

The tool does not need multiple services or repeated requests for its basic interaction.

---

## 7. What happens if the API fails?

The current prototype does not depend on an API, so an API failure does not prevent the core interaction from working.

If AI is added later and the request fails, StudySnap should clearly tell the student that the response could not be generated and allow them to try again.

The interface should not leave the student with a blank or confusing state.

---

# Architecture

StudySnap is organized around three layers:

### Input Layer

The student enters a homework question, assignment, or topic into the text field and chooses how they want help.

### Logic Layer

JavaScript receives the input and processes it according to the rules of the prototype.

The system determines what type of study response should be shown.

### Output Layer

StudySnap returns a study response to the student.

The response can be structured as an explanation, breakdown, study guide, or quiz prompt.

---

# Core Loop

The core interaction is:

**Question → Process → Study Response**

1. The student enters something they are working on.
2. The student asks StudySnap for help.
3. The system processes the input.
4. A study response appears.
5. The student can continue working from that response.

The interaction is intentionally small. StudySnap is not meant to become a full learning-management system.

---

# Behavior Integrity Check

## Does this system interrupt where claimed?

StudySnap does not interrupt the student with notifications or forced actions.

Instead, it intervenes at the moment when the student has a question or does not know how to approach their work.

## Does it avoid shame, surveillance, or manipulation?

Yes.

The tool does not track productivity, punish the student, compare them with other students, or use pressure to keep them using the tool.

## Is it exploiting friction, or designing it intentionally?

The interaction uses a small amount of intentional friction by asking the student to put their question into words before receiving help.

This makes the student identify what they are actually working on rather than immediately receiving a generic answer.

## Is it minimal, or drifting toward feature stacking?

The core system remains focused on one purpose:

**helping a student move from confusion toward understanding.**

Features such as quizzes and study guides support that purpose rather than creating unrelated functionality.

---

# Break Log

The break log documents moments when the prototype failed during development and what changed afterward.

These entries will be updated as the prototype is tested and broken.

---

## Break 1

**Date:** TBD  
**Commit:** TBD  
**What broke:** TBD  
**What changed:** TBD  

---

## Break 2

**Date:** TBD  
**Commit:** TBD  
**What broke:** TBD  
**What changed:** TBD  

---

## Break 3

**Date:** TBD  
**Commit:** TBD  
**What broke:** TBD  
**What changed:** TBD  

---

# Build Notes

The prototype is being developed as a small browser-based tool using HTML, CSS, and JavaScript.

The build is intentionally separated from the visual atmosphere work. The mechanical version focuses first on making the core behavior function before the interface is refined.

---

# Design Direction

StudySnap uses the idea of a **Companion**.

The tool should feel like something sitting beside the student rather than a system controlling them.

The final atmosphere uses:

- soft green
- open spacing
- calm typography
- gentle transitions
- supportive language
- minimal interaction

The visual design is meant to reduce pressure while keeping the student engaged with their own work.
