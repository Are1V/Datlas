# ML monitoring dashboard

Detect input shifts and evaluate performance when delayed labels arrive.

## Project brief

- **Dataset:** [California housing](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_california_housing.html)
- **Prerequisites:** Chapter 16, Chapter 17, Chapter 31, Chapter 32, Chapter 33
- **Deliverable:** A monitoring dashboard and an alert-response runbook.

## Objectives

- Distinguish drift types
- Choose alert thresholds
- Plan operational responses

## Evaluation

Simulate covariate shift and delayed labels; measure false alarms and detection delay.

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

