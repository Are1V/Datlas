# Fraud detection

Find rare suspicious transactions under a limited review capacity.

## Project brief

- **Dataset:** [Credit Card Fraud](https://www.openml.org/search?type=data&sort=runs&id=1597)
- **Prerequisites:** Chapter 14, Chapter 15, Chapter 16, Chapter 17
- **Deliverable:** A ranked review queue and a reproducible model evaluation.

## Objectives

- Evaluate rare events
- Tune review capacity
- Analyze false positives

## Evaluation

Use precision at review capacity and PR-AUC; document anonymization constraints.

## Suggested repository structure

```text
data/README.md
notebooks/01-exploration.ipynb
src/data.py
src/train.py
src/evaluate.py
tests/
reports/
requirements.txt
README.md
```

## Start here

1. Create the folders shown above.
2. Record the dataset source and license in `data/README.md`.
3. Build the simplest defensible baseline first.
4. Keep validation data separate from model decisions.
5. Report errors, assumptions, and limitations with the final result.

Return to the [Datlas project library](https://are1v.github.io/Datlas/projects/).

