# Credit risk modeling

Estimate default risk and examine the consequences of classification errors.

## Project brief

- **Dataset:** [Default of Credit Card Clients](https://archive.ics.uci.edu/dataset/350/default+of+credit+card+clients)
- **Prerequisites:** Chapter 14, Chapter 16, Chapter 17, Chapter 27, Chapter 33
- **Deliverable:** A benchmark model, calibration plots, and a model card.

## Objectives

- Calibrate probabilities
- Audit subgroup performance
- Explain decisions

## Evaluation

Compare an interpretable baseline; discuss historical and subgroup limitations.

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

