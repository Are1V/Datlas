# Customer segmentation

Group customers by purchasing behavior to support distinct service strategies.

## Project brief

- **Dataset:** [Online Retail](https://archive.ics.uci.edu/dataset/352/online+retail)
- **Prerequisites:** Chapter 08, Chapter 10, Chapter 21
- **Deliverable:** A segmentation notebook and a short action brief for each group.

## Objectives

- Construct RFM features
- Compare clustering methods
- Interpret segments

## Evaluation

Assess stability, scaling sensitivity, and cluster usefulness beyond a silhouette score.

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

