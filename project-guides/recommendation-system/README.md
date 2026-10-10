# Recommendation system

Rank movies for a user while handling new users with little history.

## Project brief

- **Dataset:** [MovieLens small](https://grouplens.org/datasets/movielens/latest/)
- **Prerequisites:** Chapter 04, Chapter 08, Chapter 17, Chapter 26
- **Deliverable:** A recommender with a popularity fallback and evaluation notebook.

## Objectives

- Build user-item matrices
- Factorize embeddings
- Evaluate rankings

## Evaluation

Measure Recall@K, coverage, and cold-start quality with a temporal split.

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

