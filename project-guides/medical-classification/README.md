# Medical classification

Classify diagnostic measurements while quantifying uncertainty and limitations.

## Project brief

- **Dataset:** [Breast Cancer Wisconsin](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_breast_cancer.html)
- **Prerequisites:** Chapter 07, Chapter 14, Chapter 16, Chapter 17, Chapter 33
- **Deliverable:** An educational classifier and a limitations-focused report.

## Objectives

- Compare classifiers
- Reason about error costs
- Document data limits

## Evaluation

Report sensitivity, specificity, calibration, and uncertainty; avoid clinical-use claims.

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

