# Production recommendation system

Separate candidate retrieval from ranking and support users without history.

## Project brief

- **Dataset:** [MovieLens small](https://grouplens.org/datasets/movielens/latest/)
- **Prerequisites:** Chapter 17, Chapter 26, Chapter 30, Chapter 31, Chapter 32
- **Deliverable:** A two-stage recommendation service with a batch refresh pipeline.

## Objectives

- Design retrieval
- Cache safely
- Monitor recommendation quality

## Evaluation

Measure Recall@K, coverage, serving latency, and fallback behavior.

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

