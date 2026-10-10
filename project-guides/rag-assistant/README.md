# Grounded research assistant

Answer questions from a small trusted document collection while showing the evidence behind every answer.

## Project brief

- **Dataset:** [Your own public documentation collection](https://huggingface.co/docs/transformers/index)
- **Prerequisites:** Chapter 23, Chapter 24, Chapter 37
- **Deliverable:** A retrieval-augmented assistant with citations, structured traces, and an evaluation report.

## Objectives

- Build a retrieval pipeline
- Ground answers in sources
- Evaluate failures systematically

## Evaluation

Test retrieval recall, answer support, abstention, latency, and cost on a fixed set of realistic questions.

## Suggested repository structure

```text
README.md
data/README.md
src/ingest.py
src/retrieve.py
src/generate.py
src/evaluate.py
tests/
reports/evaluation.md
```

## Start here

1. Create the folders shown above.
2. Record the dataset source and license in `data/README.md`.
3. Build the simplest defensible baseline first.
4. Keep validation data separate from model decisions.
5. Report errors, assumptions, and limitations with the final result.

Return to the [Datlas project library](https://are1v.github.io/Datlas/projects/).

