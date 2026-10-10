# Customer churn prediction

Identify customers likely to leave before an intervention deadline.

## Project brief

- **Dataset:** [Iranian Churn](https://archive.ics.uci.edu/dataset/563/iranian+churn+dataset)
- **Prerequisites:** Chapter 08, Chapter 14, Chapter 15, Chapter 16, Chapter 17
- **Deliverable:** A classification pipeline and a threshold recommendation.

## Objectives

- Prevent temporal leakage
- Handle class imbalance
- Choose decision thresholds

## Evaluation

Report PR-AUC, calibration, and recall at an explicit outreach budget.

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

