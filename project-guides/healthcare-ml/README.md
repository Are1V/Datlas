# Explainable healthcare ML

Audit explanations of a diagnostic classifier without confusing them with causal evidence.

## Project brief

- **Dataset:** [Breast Cancer Wisconsin](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_breast_cancer.html)
- **Prerequisites:** Chapter 14, Chapter 17, Chapter 27, Chapter 29, Chapter 33
- **Deliverable:** A model card, subgroup evaluation, and explanation stability study.

## Objectives

- Audit explanations
- Quantify uncertainty
- Communicate intended use

## Evaluation

Compare SHAP and permutation importance; identify data limitations and unsupported claims.

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

