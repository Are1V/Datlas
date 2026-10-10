# House price prediction

Predict house values from available property and neighborhood attributes.

## Project brief

- **Dataset:** [California housing](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_california_housing.html)
- **Prerequisites:** Chapter 04, Chapter 08, Chapter 10, Chapter 13, Chapter 17
- **Deliverable:** A reproducible regression pipeline and residual-analysis report.

## Objectives

- Build a regression baseline
- Use leakage-safe preprocessing
- Diagnose residuals

## Evaluation

Beat a median baseline on a held-out split; report MAE and subgroup errors.

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

