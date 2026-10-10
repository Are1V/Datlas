# Real-time prediction API

Serve a validated model with a stable request and response contract.

## Project brief

- **Dataset:** [Breast Cancer Wisconsin](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_breast_cancer.html)
- **Prerequisites:** Chapter 14, Chapter 17, Chapter 31, Chapter 32
- **Deliverable:** A containerized FastAPI service with an educational-use statement.

## Objectives

- Validate requests
- Measure latency
- Test serving parity

## Evaluation

Test malformed requests, concurrent load, latency percentiles, and version rollback.

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

