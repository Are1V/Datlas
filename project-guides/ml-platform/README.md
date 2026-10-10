# End-to-end ML platform

Make training, evaluation, registration, and serving repeatable from one repository.

## Project brief

- **Dataset:** [California housing](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_california_housing.html)
- **Prerequisites:** Chapter 03, Chapter 17, Chapter 20, Chapter 30, Chapter 31, Chapter 32
- **Deliverable:** A versioned training pipeline, API, and release checklist.

## Objectives

- Track experiments
- Package models
- Automate quality gates

## Evaluation

Reproduce a model from a clean environment; verify rollback and bad-input handling.

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

